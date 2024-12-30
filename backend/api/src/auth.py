from flask import Blueprint, jsonify, redirect, request, make_response
from werkzeug.security import check_password_hash
from flask_jwt_extended import create_access_token
from .utility import check_email_exists, check_sign_up_input, check_sign_in_input, check_username_exists
from .db import db, User, BlacklistedTokenToken

auth_bp = Blueprint('auth', __name__)

def get_request_data(*keys):
    return {key: request.json.get(key) for key in keys}

def create_response(message, statusCode):
    return jsonify({"message": message}), statusCode

@auth_bp.route("/api/signup", methods=["POST"])
def sign_up():

    data = get_request_data(
        "accept-terms", "first-name", "last-name", "email", 
        "confirm-email", "password", "confirm-password", "username"
    )
    
    try:
        print(data)
        sanitizedUser = check_sign_up_input(
            data["accept-terms"], 
            data["first-name"], 
            data["last-name"], 
            data["email"],
            data["confirm-email"], 
            data["password"], 
            data["confirm-password"], 
            data["username"]
        ) 

        db.session.add(sanitizedUser)
        db.session.commit()
        return create_response("Successfully created account.", 200)
    
    except ValueError as exc: 
        create_response("Invalid Input. Please check your data.", 400)
    
    except Exception as exc:
        print(f"JA: {exc}")
        return create_response("An error occurred. Please try again later.", 500)
    
 
@auth_bp.route("/api/signin", methods=["POST"])
def sign_in():

    data = get_request_data("email", "password")

    try: 
        sanitizedCredentials = check_sign_in_input(data["email"], data["password"])
        hashedPassword = db.one_or_404(db.session.query(User.hash).filter(User.email == sanitizedCredentials["email"]))
  
        if check_password_hash(hashedPassword, sanitizedCredentials["password"]):
            userID = db.one_or_404(db.session.query(User.id).filter(User.email == sanitizedCredentials["email"]))
            access_token = create_access_token(identity=userID)
            response = make_response(create_response("Success.", 200))
            response.set_cookie('jwt', access_token, httponly=True, secure=False, samesite='Strict')
            return response
        else: 
            return create_response("Invalid credentials.", 401)

    except ValueError as exc:
        return create_response("Invalid credentials.", 401)   

    except Exception as exc:
        return create_response("Invalid credentials.", 401)


@auth_bp.route("/api/available", methods=["POST"])
def check_availability(): 

    data = get_request_data("email", "username")
    
    try:
        body = {
            "emailTaken": check_email_exists(data["email"]),
            "usernameTaken": check_username_exists(data["username"])
        }

        return make_response(body, 200)
        
    except Exception as exc:
        print(exc)
        return create_response("An error occured.", 400)