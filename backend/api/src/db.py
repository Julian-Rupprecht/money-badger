from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, DateTime, func

db = SQLAlchemy()

class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    first_name: Mapped[str] = mapped_column(String(100))
    last_name: Mapped[str] = mapped_column(String(100))
    email: Mapped[str] = mapped_column(String(255), unique=True)
    hash: Mapped[str] = mapped_column(String(255))
    username: Mapped[str] = mapped_column(String(100), unique=True)
    created_at: Mapped[DateTime] = mapped_column(DateTime, default=func.now())