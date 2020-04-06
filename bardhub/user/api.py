from .models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from . import views

# Lead ViewSet


class UserViewSet(viewsets.ModelViewSet):
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
        queryset = User.objects.all()
        Display_name = self.request.query_params.get('Display_name', None)
        if id is not None:
            #queryset = Album.objects.all().order_by('-Time_stamp')[:5]
            queryset = User.objects.filter(Display_name=Display_name)
        return queryset
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer



