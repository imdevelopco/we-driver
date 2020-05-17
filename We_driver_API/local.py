from .settings import *

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
       'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'we-drive',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
