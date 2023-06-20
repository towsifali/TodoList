from fastapi import FastAPI,APIRouter, status, HTTPException
from app.schemas.user_schema import UserAuth, UserOut
from fastapi import Depends
from app.services.user_service import UserService
import pymongo
from app.models.user_model import User


user_router = APIRouter()

@user_router.post('/create', summary="Create new user", response_model=UserOut)
async def create_user(data: UserAuth):
    try:
        return await UserService.create_user(data)
    except:
        raise HTTPException(status_code=409, detail="This email alredy registered")