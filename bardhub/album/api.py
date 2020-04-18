from .models import Album
from rest_framework import viewsets, permissions, generics, status
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import AlbumSerializer
from django.db import connection
from rest_framework.response import Response

# Album ViewSet

class AlbumViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        #
        # Freaking hard to find this params passing method
        #
        queryset = Album.objects.all()
        id = self.request.query_params.get('id', None)
        if id is not None:
            queryset = Album.objects.filter(User=id)
        print(queryset)
        return queryset
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer

class AlbumViewSetTracks(viewsets.ModelViewSet):
    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        #
        # Freaking hard to find this params passing method
        #
        queryset = Album.objects.all()
        Name = self.request.query_params.get('Name', None)
        if id is not None:
            queryset = Album.objects.filter(Name=Name)
        return queryset
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer

def dfetchone(cursor):
    columns = [col[0] for col in cursor.description]
    return dict(zip(columns, cursor.fetchone()))

def dfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]

class MakeAlbum(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        print("request.data", request.data)
        request.data["User"] = request.user.id
        print(request.user.id," user id of create album")
        album_serializer = AlbumSerializer(data=request.data, partial=True)
        # album_data = album_serializer.data
        # album_data["User"] = request.user
        # album_serializer = AlbumSerializer(data=album_data)
        if album_serializer.is_valid():
            album_serializer.save()
            print(album_serializer.data)
            return Response(album_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', album_serializer.errors)
            return Response(album_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EditAlbum(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        print(request.data)
        queryset = Album.objects.filter(id=request.data.get("id"), User=request.user)
        if queryset.exists():
            album_serializer = AlbumSerializer(queryset[0], data=request.data, partial=True)
            if album_serializer.is_valid():
                album_serializer.save()
                return Response({"album": album_serializer.data})
            else:
                print('error', album_serializer.errors)
                return Response(album_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("Incorrect id, or invalid user")
            return Response({}, status=status.HTTP_400_BAD_REQUEST)

class IncViewCount(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        album_id = request.data.get("id")
        with connection.cursor() as cursor:
            cursor.execute("UPDATE album_album SET album_album.Count = album_album.Count + 1 WHERE album_album.id = %s", [album_id])
            cursor.execute("SELECT id, Count, Description FROM album_album WHERE album_album.id = %s", [album_id])
            album = dfetchone(cursor)
            return Response({"album": album})

class CheatViewCount(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        album_id = request.data.get("id")
        with connection.cursor() as cursor:
            cursor.execute("UPDATE album_album SET album_album.Count = 50 WHERE album_album.id = %s", [album_id])
            cursor.execute("SELECT id, Count, Description FROM album_album WHERE album_album.id = %s", [album_id])
            album = dfetchone(cursor)
            return Response({"album": album})

# AlbumNewestViewSet
class AlbumNewestViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all().order_by('-Time_stamp')[:5]
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer

# AlbumNewestViewSet
class AlbumNewestOneViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all().order_by('-Time_stamp')[:1]
    permissions_classes = [
        permissions.AllowAny
    ]
    
class AlbumsFromPastMonth(viewsets.ModelViewSet):
    #in MySQL: 
    #in sqlite:
    # queryset = Album.objects.raw("SELECT * FROM album_album WHERE Time_stamp BETWEEN %s AND %s", [date('now','-1 month'), date('now','+1 day')]);

    def get_queryset(self):
        queryset = Album.objects.raw('SELECT * FROM album_album WHERE Time_stamp BETWEEN date_sub(now(), interval 1 month) AND date_add(now(), interval 1 day)')
        return queryset
    #We're gonna get this info and then on the front end summarize it into a single number, and explain to professor that getting it to work with our framework otherwise would be impossible to finish in our time limit
    permissions_classes = [  
        permissions.AllowAny ]
    serializer_class = AlbumSerializer

# def AlbumsFromPastMonth():
    # query = "SELECT * FROM album_album WHERE Time_stamp BETWEEN date_sub(now(), interval 1 month) AND date_add(now(), interval 1 day)"
    # with connection.cursor() as cursor:
        # cursor.execute(query)
        # albums_pastmonth_count = dfetchone(cursor)
            # return Response({"albums_pastmonth_count": albums_pastmonth_count})
        