from app.models.user_model import User
from app.models.todo_model import Todo
from app.schemas.todo_schema import TodoCreate
from typing import List


class TodoService:
    @staticmethod
    async def list_todos(user: User) -> List[Todo]:
        todos = await Todo.find(Todo.owner.id == user.user_id).to_list()
        return todos
    @staticmethod
    async def create_todo(data: TodoCreate, user: User) -> Todo:
        todo = Todo(**data.dict(), owner=user)
        return await todo.insert()