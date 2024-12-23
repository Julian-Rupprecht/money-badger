from .db import User
from werkzeug.security import generate_password_hash

def check_sign_up_input(acceptTerms, firstName, lastName, email, confirmEmail, password, confirmPassword, username):
    # TODO input sanitization
    hashedPassword = generate_password_hash(password)

    sanitizedUser = User(
        first_name=firstName,
        last_name=lastName, 
        email=email,
        hash=hashedPassword,
        username=username
    )

    return sanitizedUser


def check_sign_in_input(email, password):
    # TODO input sanitization
    return {"email": email, "password": password}
