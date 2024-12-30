from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, DateTime, func, Integer

db = SQLAlchemy()

class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    first_name: Mapped[str] = mapped_column(String(100))
    last_name: Mapped[str] = mapped_column(String(100))
    email: Mapped[str] = mapped_column(String(255), unique=True)
    hash: Mapped[str] = mapped_column(String(255))
    username: Mapped[str] = mapped_column(String(20), unique=True)
    created_at: Mapped[DateTime] = mapped_column(DateTime, default=func.now())

class BlacklistedToken(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    jti: Mapped[str] = mapped_column(String(100))
    user_id: Mapped[int] = mapped_column(Integer)
    revoked_at: Mapped[DateTime] = mapped_column(DateTime, default=func.now())
    expires_at:Mapped[DateTime] = mapped_column(DateTime)