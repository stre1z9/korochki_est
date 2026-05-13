from flask import Blueprint
from flask import request
from flask import jsonify
from app.database.db import db
from app.models.review import Review
review_bp = Blueprint(
    'reviews',
    __name__,
    url_prefix='/api/reviews'
)
@review_bp.route('', methods=['POST'])
def create_review():
    data = request.get_json()
    review = Review(
        application_id= data.get('application_id'),
        review_text= data.get('review_text')
    )
    db.session.add(review)
    db.session.commit()
    return jsonify({
        'success': True,
        'message': 'Отзыв отправлен'
    })