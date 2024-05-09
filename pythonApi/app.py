from flask import Flask, render_template, url_for, request, flash, session, redirect,abort, g, jsonify, make_response
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import requests

app = Flask(__name__)
jwt = JWTManager(app)
app.config['SECRET_KEY'] = 'fc7717786e8e36a8b77e9055d25bb430'
app.config["MONGO_URL"] = "mongodb+srv://lycoris_recoil:ohXyjXDRPY87xTTC@lycoris.msvik4v.mongodb.net/lycoris?retryWrites=true&w=majority&appName=Lycoris"
mongo = PyMongo(app, app.config["MONGO_URL"])
# URL вашего API Express.js для регистрации пользователя


@app.route("/register", methods=["POST"])
def register():
    if not request.json or not all(key in request.json for key in ['name', 'email', 'password', 'password_check']):
        abort(400)

    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    password_check = request.json['password_check']

    if password != password_check:
        abort(400, "Passwords do not match")

    ## Проверка наличия пользователя в бд
    #url = 'http://localhost:3000/user/exists'
    #data = {'email': email}
    #response = requests.post(url, json=data)

    #if response.status_code == 200 and response.json()['exists']:
    #    abort(400, "User with this email already exists")

    hashed_password = generate_password_hash(password)
    data = {
        "name": name,
        "email": email,
        "password": hashed_password
    }

    url = 'http://localhost:3000/user'
    response = requests.post(url, json=data)

    if response.status_code == 201:
        return jsonify({'message': 'Registration successful'}), 201
    else:
        return jsonify({'error': 'Failed to register'}), 500


@app.route("/login", methods=["POST", "GET"])
def login():
    return render_template('login.html', title="Авторизация")

@app.route("/api/login", methods=["POST", "GET"])
def api_login():
    db = mongo.db.users
    name = request.form['name']
    password = request.form['password']
    user = db.find_one({'name': name})

    if not user or not check_password_hash(user['password'], password):
        return jsonify({'message': 'Неверные имя пользователя или пароль'}), 401

    # Создание JWT токена
    access_token = create_access_token(identity=name)
    # Возвращаем токен как куки в ответе
    resp = make_response(jsonify({'access_token': access_token}))
    resp.set_cookie('access_token', access_token)
    return resp

# Требует jwt токен в заголовке запроса
@app.route("/profile/<name>")
@jwt_required() # Защищаем этот маршрут с помощью JWT
def profile(name):
    # Получаем идентификатор пользователя из JWT токена
    current_user = get_jwt_identity()
    if current_user != name:
        abort(401)
    return f"Пользователь {name}"

@app.route('/users', methods=['GET'])
def get_users():
    users = mongo.db.users.find()
    user_list = []
    for user in users:
        user_list.append({'name': user['name'], 'email': user['email'], 'password': user['password']})
    return jsonify(user_list)

if __name__ == "__main__":
    app.run(debug=True, port=3000)