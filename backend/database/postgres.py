import peewee
import os
from .connection import PeeweeConnectionState




db = peewee.PostgresqlDatabase(
    os.getenv('POSTGRES_BD_NAME'), 
    user=os.getenv('POSTGRES_BD_USER'), 
    password=os.getenv('POSTGRES_BD_PASSWORD'),
    host=os.getenv('POSTGRES_BD_HOST_DOMAIN'),
    port=os.getenv('POSTGRES_BD_HOST_PORT')
)

db._state = PeeweeConnectionState()