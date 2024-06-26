from sqladmin import Admin
from sqladmin.authentication import AuthenticationBackend
from starlette.requests import Request
from starlette.responses import RedirectResponse
from dispatcher import app

class AdminAuth(AuthenticationBackend):
    async def login(self, request: Request) -> bool:
        request.session.update({"token": "..."})
        return True

    async def logout(self, request: Request) -> bool:
        request.session.clear()
        return True

    async def authenticate(self, request: Request) -> bool:
        token = request.session.get("token")

        if not token:
            return False

        # Check the token in depth
        return True
    
authentication_backend = AdminAuth(secret_key="123")
