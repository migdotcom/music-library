import sys
from rest_framework import permissions, generics
from rest_framework.response import Response
from .serializers import genreSerializer

from . import views
from django.db import connection
from django.forms.models import model_to_dict
   
class tracksOfGenre(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        genre = request.data.get("genre")
        print(genre)
        with connection.cursor() as cursor:
            cursor.execute("""
            SELECT album_album.Name as "Album", A.Name as "Track", user_user.username as "Artist" FROM track_track A join tag_tag B on A.tag_id=B.id
             INNER JOIN album_album ON A.album_id = album_album.id
             INNER JOIN user_user ON A.Artist_id = user_user.id
             WHERE B.genre = %s """ , [genre]
             )
            result = dfetchone(cursor)
            
        return Response({"tracksOfGenre": result})
    permission_classes = [  permissions.AllowAny]
    serializer_class = genreSerializer

    
def dfetchone(cursor):
    columns = [col[0] for col in cursor.description]
    return dict(zip(columns, cursor.fetchone()))

def dfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]
