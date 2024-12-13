from pydantic import BaseModel, field_validator
from pydantic_core import PydanticCustomError

import re


email_regex = re.compile(r'^(?![0-9])([0-9aA-zZ]{2,}(?:\.?))+[0-9aA-zZ]+@[aA-zZ]{2,}\.[aA-zZ]{2,}$')


class UserCreateDTO(BaseModel):
    email: str

    @field_validator('email')
    @classmethod
    def email_validator(cls, v: str) -> str:
        if (not email_regex.match(v)):
            raise PydanticCustomError('validation_error', 'Неверный формат почты')
        return v



class UserDTO(BaseModel):
    id: int
    email: str