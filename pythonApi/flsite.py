from flask import Flask, render_template, url_for, request, flash, session, redirect,abort, g, jsonify, make_response
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)
jwt = JWTManager(app)
app.config['SECRET_KEY'] = 'fc7717786e8e36a8b77e9055d25bb430'
app.config["MONGO_URL"] = "mongodb+srv://lycoris_recoil:ohXyjXDRPY87xTTC@lycoris.msvik4v.mongodb.net/lycoris?retryWrites=true&w=majority&appName=Lycoris"
mongo = PyMongo(app, app.config["MONGO_URL"])

@app.route("/")
def index():
    return render_template('index.html', title = "Главная", h1 = "Цветочки")

@app.route("/register", methods=["POST", "GET"])
def register():
    if request.method == "POST":
        db = mongo.db.users
        # Получение данных из формы
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        password_check = request.form['password_check']

        # Проверка совпадения паролей
        if password != password_check:
            flash('Пароли не совпадают', category='error')
            return redirect(url_for('register'))

        # Проверка наличия пользователя в бд
        if db.find_one({"email": email}):
            flash('Пользователь с таким email уже существует', category='error')
            return redirect(url_for('register'))

        # Хеширование пароля
        hashed_password = generate_password_hash(password)

        # Вставка пользователя в базу данных
        db.insert_one({
            "name": name,
            "email": email,
            "password": hashed_password
        })

        flash('Регистрация прошла успешно', category='success')
        return redirect(url_for('login'))
    return render_template('register.html', title="Регистрация")

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