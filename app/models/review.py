from app.database.db import db
class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    application_id = db.Column(
        db.Integer,
        db.ForeignKey('applications.id'),
        nullable=False
    )
    review_text = db.Column(
        db.Text,
        nullable=False
    )