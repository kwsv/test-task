from models.user import User
from .postgres import db


def init_db():
    db.connect()
    db.create_tables([User])
    db.close()