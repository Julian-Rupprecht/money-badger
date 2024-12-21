from flask import Flask
from .config import Config
from .db import db
from .auth import auth_bp
import os

# Application factory for configuration, registration and setup
def create_app(test_config=None):
    app = Flask(__name__) # __name__ is the name of the current python module    try:
    app.config.from_object(Config)
    
    db.init_app(app)
    app.register_blueprint(auth_bp)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run()
