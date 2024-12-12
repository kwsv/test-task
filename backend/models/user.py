import peewee
from database.postgres import db


class User(peewee.Model):
    email = peewee.CharField(unique=True, index=True)

    class Meta:
        database = db

