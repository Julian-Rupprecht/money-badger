from flask import Flask
from flask_jwt_extended import JWTManager
from .config import Config
from .db import db
from .auth import auth_bp

def create_app(test_config=None):
    app = Flask(__name__)
    app.config.from_object(Config)
    
    db.init_app(app)
    jwt = JWTManager(app)
    app.register_blueprint(auth_bp)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run()
