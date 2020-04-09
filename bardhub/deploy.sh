# build our heroku-ready local Docker image
docker build -t bardhub-heroku -f Dockerfile .


# push your directory container for the web process to heroku
heroku container:push web -a bardhub-music

# promote the web process with your container 
heroku container:release web -a bardhub-music


# run migrations
heroku run python3 manage.py migrate -a bardhub-music
