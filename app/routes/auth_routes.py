from flask import Blueprint
from flask import request
from flask import jsonify
from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)
from app.database.db import db
from app.models.user import User
auth_bp = Blueprint(
    'auth',
    __name__,
    url_prefix='/api'
)
# REGISTER
@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    login = data.get('login')
    password = data.get('password')
    existing_user = User.query.filter_by(
        login=login
    ).first()
    if existing_user:
        return jsonify({
            'success': False,
            'message': 'Логин уже существует'
        }), 400
    hashed_password = generate_password_hash(
        password
    )
    user = User(
        login=login,
        password_hash=hashed_password,
        full_name=data.get('full_name'),
        phone=data.get('phone'),
        email=data.get('email')
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({
        'success': True,
        'message': 'Пользователь зарегистрирован'
    })
# LOGIN
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    login = data.get('login')
    password = data.get('password')
    user = User.query.filter_by(
        login=login
    ).first()
    if not user:
        return jsonify({
            'success': False,
            'message': 'Неверный логин или пароль'
        }), 401
    if not check_password_hash(
        user.password_hash,
        password
    ):
        return jsonify({
            'success': False,
            'message': 'Неверный логин или пароль'
        }), 401
    return jsonify({
        'success': True,
        'message': 'Успешный вход',
        'user_id': user.id
    })