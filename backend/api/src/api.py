from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)


@app.route("/")
def hello_world():
    return("<p>Backend</p>")

if __name__ == '__main__':
    app.run(debug=True)