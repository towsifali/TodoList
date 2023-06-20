from fastapi import APIRouter, Depends
from app.schemas.todo_schema import TodoOut, TodoCreate
from app.api.deps.user_deps import get_current_user
from app.models.user_model import User
from app.services.todo_service import TodoService
from app.models.todo_model import Todo

todo_router = APIRouter()

@todo_router.get('/', summary="Get all todos of the user", response_model=TodoOut)
async def list(current_user: User = Depends(get_current_user)):
    return await TodoService.list_todos(current_user)

@todo_router.post('/create', summary="Create Todo", response_model=Todo)
async def create_todo(data: TodoCreate, current_user: User = Depends(get_current_user)):
    return await TodoService.create_todo(current_user,data)