from datetime import datetime
from app.database.db import db
class Application(db.Model):
    __tablename__ = 'applications'
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    user_id = db.Column(
        db.Integer,
        db.ForeignKey('users.id'),
        nullable=False
    )
    course_name = db.Column(
        db.String(255),
        nullable=False
    )
    start_date = db.Column(
        db.Date,
        nullable=False
    )
    payment_method = db.Column(
        db.String(50),
        nullable=False
    )
    status = db.Column(
        db.String(50),
        default='Новая'
    )
    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )