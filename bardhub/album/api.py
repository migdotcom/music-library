from .models import Album
from rest_framework import viewsets, permissions
from .serializers import AlbumSerializer

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
        """
        try:
            # get all field
            listField = Album._meta.fields
            listParams = []
            for i in range(len(listField)):
                tmpList = (str(listField[i])).split('.')
                listParams.append(str(tmpList[len(tmpList)-1]))
            print(listParams, "---heeeeeeeeeeeeeeeeeeeeeeee----")
        except:
            print("An exception occurred")
        """
        queryset = Album.objects.all()
        id = self.request.query_params.get('id', None)
        if id is not None:
            #queryset = Album.objects.all().order_by('-Time_stamp')[:5]
            queryset = Album.objects.filter(User=id)
        return queryset
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer


# AlbumNewestViewSet

class AlbumNewestViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all().order_by('-Time_stamp')[:5]
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer

