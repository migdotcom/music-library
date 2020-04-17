# Ryan’s Shitty Guide to Django/React Communication

Alright, so you want to get/change/add something to/from the database, right? Well, the first thing you’ll need to do, is decide what needs to be done.

## Creating the api endpoint

If this is a something you need to use to GET data from the database (and only get data), and you don’t to pass any parameters, you should use a GET request.
Otherwise, use a POST request.

Once you’ve decided that, the first step is to create a new View API in \<module>/api.py (\<module> being wherever the relevant data is located, or at least as close to it as possible).

Here’s an example of the basic stuff:
```python
class DummyAPI(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        #Some Code goes here
```
Of course, this is assumuing that you're doing a post request. If this is a get request, just change the post(...) to get(...).

Now, there's an important question here: *Does the user need to be logged in?* If so, then add permission_classes = [permissions.IsAuthenticated] to the above.

### For Things Requiring Authentication

IF this is the case, then you can refer to the current user as request.user, which returns the Django model object corresponding to whoever is calling this while logged in.

An example of using these two is as follows:

```python
class DummyAPI(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        user_id = request.user.id
        #Some More Code goes here
    permission_classes = [permissions.IsAuthenticated]
```

As a side note: When you use this, it will be impossible to access the /api/... point in your browser directly. Apparently navigating straight to it doesn't actually try to authenticate you, so it'll give you an authentication error.

### For Things Not Requiring Authentication

In this case, you cannot rely on request.user, so you'll have to pass this information some other way. Also, you should specify permission_classes = [permissions.AllowAny]

```python
class DummyAPI(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        #Some Code goes here
    permission_classes = [permissions.AllowAny]
```

## Getting Passed Data

In both cases, it is likely that you will need to obtain data passed from the frontend for your query, such as the target user id if the user is not logged in, or a target id of the album/etc. All passed in data is in request.data, and takes the form of a dictionary, corresponding to the passed javascript object used when doing the call.

Here's an example of getting the user name from the passed request (assuming we passed an album name):

```python
def post(self, request, *args, **kwargs):
    album_name = request.data.get("name")
```
NOTE: The key name is case sensitive. So if, for example the album name in the example above was actually stored in "Name", the above wouldn't work. Remember your case!

## Doing the Queries

Now, for actually doing queries. First, set up the cursor using a with block, and then execute it. Example:

```python
def post(self, request, *args, **kwargs):
    #Get stuff from the request from here
    with connection.cursor() as cursor:
        cursor.execute("SOME QUERY HERE")
```

If you need to use variables in your query, you can use the %s syntax. Note: this also protects from SQL Injection.

```python
def post(self, request, *args, **kwargs):
    #Get stuff from the request from here
    album_name = request.data.get("name")
    user_id = request.data.get("id")
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM album_album WHERE album_album.Name = %s AND album_album.User_id = %s", [album_name, user_id])
```

_WARNING: The name of the field stored in the database, vs django's name, might be different! Make sure to use the mysql console to double check your query, and the tables/columns it references_

## Returning the Result

The result needs to be returned in a Response() object, which takes a dictionary of any values you want to return.

Technically, you can use cursor.fetchone() or cursor.fetchall() to get results, but they only return a tuple with the values, they won't contain the column names.

If instead you need it in the form of a dictionary of rows to resulting columns, use this:

### Utility Functions for Returning the Result

```python
def dfetchone(cursor):
    columns = [col[0] for col in cursor.description]
    return dict(zip(columns, cursor.fetchone()))

def dfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]
```

### Example

And an example using them:

```python
def post(self, request, *args, **kwargs):
    #Get stuff from the request from here
    album_name = request.data.get("name")
    user_id = request.data.get("id")
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM album_album WHERE album_album.Name = %s AND album_album.User_id = %s", [album_name, user_id])
        #If I want the first result
        result = dfetchone(cursor)
        #If I want all results
        result = dfetchall(cursor)
        #And to return the final value:
        return Response({"dummy_result": result})
        #You can also return it directly if it's a dictionary already:
        return Response(result)
```

## Adding the new URLS

Import your stuff, at the top of the connected urls file, and then add it as follows:
```python
urlpatterns = router.urls +[path('api/albums/inc-views', IncViewCount.as_view()),
                            path('api/albums/inc-views/cheat', CheatViewCount.as_view()),
                            path('api/albums/create', MakeAlbum.as_view()),
                            path('api/albums_edit', EditAlbum.as_view())]
```

