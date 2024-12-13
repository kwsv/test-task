import os
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from database.init import init_db
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Depends, FastAPI, HTTPException
from dto.user import UserCreateDTO, UserDTO
from database.postgres import db
from database.connection import db_state_default
from services.user import create_user, get_user_by_email



init_db()


app = FastAPI()

origins = [
    os.getenv('FRONTEND_DOMAIN'),
    ':'.join([os.getenv('FRONTEND_DOMAIN'), os.getenv('FRONTEND_PORT')])
]


async def reset_db_state():
    db._state._state.set(db_state_default.copy())
    db._state.reset()

def get_db(db_state=Depends(reset_db_state)):
    try:
        db.connect()
        yield
    finally:
        if not db.is_closed():
            db.close()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):

    errors = { 'body': {} }
    for error in exc.errors():
        location = error['loc']
        loc = errors
        for part in location[:-1]:
            nextLoc = loc.get(part)
            if not nextLoc:
                obj = {}
                loc[part] = obj
                loc = obj
            else:
                loc = nextLoc
        loc[location[-1]] = error['msg']
        
    return JSONResponse({ 'errors': errors['body'] }, status_code=400)


@app.post("/users/", response_model=UserDTO, dependencies=[Depends(get_db)])
def create_user_url(user: UserCreateDTO):
    db_user = get_user_by_email(email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Пользователь уже зарегестрирован")
    return create_user(user=user)


@app.post("/users/unregistered", dependencies=[Depends(get_db)])
def check_user(user: UserCreateDTO):
    db_user = get_user_by_email(email=user.email)
    return {
        "status": not db_user,
        "message": "Пользователь уже зарегестрирован" if db_user else None
    }
