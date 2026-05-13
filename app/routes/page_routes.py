from flask import Blueprint
from flask import render_template
page_bp = Blueprint(
    'pages',
    __name__
)
@page_bp.route('/')
def home():
    return render_template('login.html')
@page_bp.route('/login')
def login_page():
    return render_template('login.html')
@page_bp.route('/register')
def register_page():
    return render_template('register.html')
@page_bp.route('/applications')
def applications_page():
    return render_template('applications.html')
@page_bp.route('/admin')
def admin_page():
    return render_template('admin.html')
@page_bp.route('/admin-login')
def admin_login_page():
    return render_template(
        'admin_login.html'
    )