from flask import Flask, request, abort, jsonify
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS
from bson import ObjectId

app = Flask(__name__)
jwt = JWTManager(app)
CORS(app)
app.config['SECRET_KEY'] = 'fc7717786e8e36a8b77e9055d25bb430'
app.config["MONGO_URL"] = "mongodb+srv://lycoris_recoil:ohXyjXDRPY87xTTC@lycoris.msvik4v.mongodb.net/lycoris?retryWrites=true&w=majority&appName=Lycoris"
mongo = PyMongo(app, app.config["MONGO_URL"])


@app.route("/user/<user_id>", methods=["GET"])
def get_user_by_id(user_id):
    user = mongo.db.users.find_one({"_id": ObjectId(user_id)})
    if user:
        user['_id'] = str(user['_id']) 
        return jsonify(user), 200
    else:
        return jsonify({"error": "User not found"}), 404


def find_user_by_email(email):
    return mongo.db.users.find_one({"email": email})

def create_user(name, address, email, password):
    try:
        hashed_password = generate_password_hash(password)
        user_data = {"name": name, "address": address, "email": email, "password": hashed_password}
        result = mongo.db.users.insert_one(user_data)
        return result.inserted_id
    except Exception as e:
        app.logger.error(f"Failed to create user: {e}")
        raise

def get_user_by_email(email):
    user = find_user_by_email(email)
    if user:
        user['_id'] = str(user['_id'])
    return user

    
@app.route("/register", methods=["POST"])
def register_user():
    if not request.json or not all(key in request.json for key in ['name', 'email', 'password', 'password_check']):
        abort(400)

    data = request.json
    name = data.get('name')
    address = data.get('address')
    email = data.get('email')
    password = data.get('password')
    password_check = data.get('password_check')

    if find_user_by_email(email):
        return jsonify({"error": "User with this email already exists"}), 400

    if password != password_check:
        abort(400, "Passwords do not match")

    try:
        user_id = create_user(name, address, email, password)
        return jsonify({"message": "User successfully registered", "user_id": str(user_id)}), 201
    except:
        return jsonify({"error": "Failed to register user"}), 500

@app.route("/login", methods=["POST"])
def login_user():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = get_user_by_email(email)

    if user:
        hashed_password = user.get('password')
        user_id = user.get('_id')

        if hashed_password and check_password_hash(hashed_password, password):
            access_token = create_access_token(identity=user_id)
            return jsonify({'access_token': access_token}), 201
        else:
            return jsonify({'message': 'Incorrect password'}), 401
    else:
        return jsonify({'message': 'Incorrect email'}), 401


if __name__ == "__main__":
    app.run(debug=True, port=3000)