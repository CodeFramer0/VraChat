from typing import Annotated

from fastapi import Header, HTTPException
from database import SessionLocal, engine

async def get_token_header(x_token: Annotated[str, Header()]):
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
