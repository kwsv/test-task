from pydantic import BaseModel, EmailStr

class UserCreateDTO(BaseModel):
    email: EmailStr

class UserDTO(BaseModel):
    id: int
    email: str