from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

app = Flask(__name__)

@app.route("/api/signup", methods=['POST'])
def sign_up():
    return request.form

@app.route("/api/signin", methods=['POST'])
def sign_in(): 
    return request.form
    
if __name__ == '__main__':
    app.run(debug=True)