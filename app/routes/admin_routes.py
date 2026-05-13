from flask import Blueprint
from flask import request
from flask import jsonify
from app.database.db import db
from app.models.application import Application
admin_bp = Blueprint(
    'admin',
    __name__,
    url_prefix='/api/admin'
)
ADMIN_LOGIN = 'Admin'
ADMIN_PASSWORD = 'KorokNET'
# ADMIN LOGIN
@admin_bp.route('/login', methods=['POST'])
def admin_login():
    data = request.get_json()
    login = data.get('login')
    password = data.get('password')
    if (
        login == ADMIN_LOGIN
        and
        password == ADMIN_PASSWORD
    ):
        return jsonify({
            'success': True,
            'message': 'Успешный вход'
        })
    return jsonify({
        'success': False,
        'message': 'Неверный логин или пароль'
    }), 401
# GET ALL APPLICATIONS
@admin_bp.route(
    '/applications',
    methods=['GET']
)
def get_all_applications():
    applications = Application.query.all()
    result = []
    for application in applications:
        result.append({
            'id': application.id,
            'course_name':
                application.course_name,
            'status':
                application.status,
            'payment_method':
                application.payment_method,
            'start_date':
                application.start_date.strftime(
                    '%Y-%m-%d'
                )
        })
    return jsonify(result)
# UPDATE STATUS
@admin_bp.route(
    '/applications/<int:application_id>',
    methods=['PUT']
)
def update_status(application_id):
    data = request.get_json()
    application = db.session.get(
        Application,
        application_id
    )
    if not application:
        return jsonify({
            'success': False,
            'message': 'Заявка не найдена'
        }), 404
    application.status = data.get('status')
    db.session.commit()
    return jsonify({
        'success': True,
        'message': 'Статус обновлен'
    })