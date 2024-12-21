from flask import Blueprint, request, jsonify
from .db import db, User
from werkzeug.security import check_password_hash, generate_password_hash

auth_bp = Blueprint('auth', __name__)

@auth_bp.route("/api/signup", methods=["POST"])
def sign_up():

    # TODO do server side checking and input sanitization 
    acceptTerms = request.json.get("accept-terms")
    firstName = request.json.get("first-name")
    lastName = request.json.get("last-name")
    email = request.json.get("email")
    confirmEmail = request.json.get("confirm-email")
    password = request.json.get("password")
    confirmPassword = request.json.get("confirm-password")
    username = request.json.get("username")

    hashedPassword = generate_password_hash(password)

    user = User(
        first_name=firstName,
        last_name=lastName, 
        email=email,
        hash=hashedPassword,
        username=username
    )

    db.session.add(user)
    db.session.commit()
    
    return jsonify({"message": "User created successfully."}), 201