"""
WSGI config for bardhub project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""
import os
import sys
from django.core.wsgi import get_wsgi_application

# assuming your django settings file is at '/home/myusername/mysite/mysite/settings.py'
path = '.bardhub'
if path not in sys.path:
    sys.path.insert(0, path)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bardhub.settings')

# serve django via WSGI
application = get_wsgi_application()
