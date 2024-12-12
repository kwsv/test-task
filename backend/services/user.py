from dto.user import UserCreateDTO
from models.user import User 

def create_user(user: UserCreateDTO):
    user = User(email=user.email)
    user.save()
    return user


def get_user_by_email(email: str):
    return User.filter(User.email == email).first()