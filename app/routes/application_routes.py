from flask import Blueprint
from flask import request
from flask import jsonify
from datetime import datetime
from app.database.db import db
from app.models.application import Application
application_bp = Blueprint(
    'applications',
    __name__,
    url_prefix='/api/applications'
)
# CREATE APPLICATION
@application_bp.route('', methods=['POST'])
def create_application():
    data = request.get_json()
    application = Application(
        user_id=data.get('user_id'),
        course_name=data.get('course_name'),
        start_date=datetime.strptime(
            data.get('start_date'),
            '%Y-%m-%d'
        ),
        payment_method=data.get(
            'payment_method'
        ),
        status='Новая'
    )
    db.session.add(application)
    db.session.commit()
    return jsonify({
        'success': True,
        'message': 'Заявка создана'
    })
# GET USER APPLICATIONS
@application_bp.route('/<int:user_id>',
methods=['GET'])
def get_user_applications(user_id):

    applications = Application.query.filter_by(
        user_id=user_id
    ).all()
    result = []
    for application in applications:
        result.append({
            'id': application.id,

            'course_name':
                application.course_name,
            'start_date':
                application.start_date.strftime(
                    '%Y-%m-%d'
                ),
            'payment_method':
                application.payment_method,
            'status':
                application.status,
            'created_at':
                application.created_at.strftime(
                    '%Y-%m-%d'
                )
        })
    return jsonify(result)