from flask import Flask
from app.routes.page_routes import page_bp
from flask_cors import CORS
from app.routes.application_routes import (application_bp)
from app.routes.review_routes import review_bp
from app.config import Config
from app.routes.admin_routes import admin_bp
from app.database.db import db
# IMPORT MODELS
from app.models.user import User
from app.models.application import Application
from app.models.review import Review
# ROUTES
from app.routes.auth_routes import auth_bp
app = Flask(
    __name__,
    template_folder='app/templates',
    static_folder='app/static'
)
app.config.from_object(Config)
db.init_app(app)
CORS(app)
app.register_blueprint(admin_bp)
app.register_blueprint(review_bp)
app.register_blueprint(application_bp)
app.register_blueprint(page_bp)
app.register_blueprint(auth_bp)
with app.app_context():
    db.create_all()
if __name__ == '__main__':
    app.run(debug=True)