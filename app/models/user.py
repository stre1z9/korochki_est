from app.database.db import db
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    login = db.Column(
        db.String(50),
        unique=True,
        nullable=False
    )
    password_hash = db.Column(
        db.Text,
        nullable=False
    )
    full_name = db.Column(
        db.String(255),
        nullable=False
    )
    phone = db.Column(
        db.String(20),
        nullable=False
    )
    email = db.Column(
        db.String(255),
        nullable=False
    )