from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_bcrypt import Bcrypt
from flasgger import Swagger
import pickle
import os
from flask_cors import CORS
from dotenv import find_dotenv, load_dotenv
load_dotenv(find_dotenv())

app = Flask(__name__)
CORS(app, origins=["http://localhost:8082"])
bcrypt = Bcrypt(app)
Swagger(app)

PORT = os.getenv("PORT") or 5001

# Database Connection
client = MongoClient("mongodb+srv://skmirajulislam181:" + os.getenv("DB_PASSWORD") +
                     "@node-js.phpp3sg.mongodb.net/?retryWrites=true&w=majority&appName=NODE-JS")
db = client['aqua_flare']
users_collection = db['users']

# Load Chatbot Model
MODEL_PATH = os.path.join(os.path.dirname(
    __file__), "./model/chatbot_pipeline.pkl")
with open(MODEL_PATH, 'rb') as model_file:
    model_data = pickle.load(model_file)


def predict_response(message):
    pipeline = model_data.get('pipeline')
    responses = model_data.get('responses')
    transformed_input = pipeline['tfidf'].transform([message])
    prediction = pipeline['model'].predict(transformed_input)[0]
    return responses.get(prediction, "I don't understand.")


@app.route('/')
def home():
    return "Hello, it App Server"


@app.route('/api/users/register', methods=['POST'])
def register_user():
    data = request.json
    username, email, password = data.get(
        'username'), data.get('email'), data.get('password')
    if users_collection.find_one({"$or": [{"email": email}, {"username": username}]}):
        return jsonify({"message": "User already exists"}), 400
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    users_collection.insert_one(
        {"username": username, "email": email, "password": hashed_password})
    return jsonify({"message": "User registered successfully"}), 201


@app.route('/api/users/login', methods=['POST'])
def login_user():
    data = request.json
    email, password = data.get('email'), data.get('password')
    user = users_collection.find_one({"email": email})
    if not user or not bcrypt.check_password_hash(user['password'], password):
        return jsonify({"message": "Invalid credentials"}), 401
    return jsonify({"message": "Login successful"})


@app.route('/api/users/logout', methods=['POST'])
def logout_user():
    return jsonify({"message": "Logout successful"})


@app.route('/api/users/delete', methods=['DELETE'])
def delete_user():
    data = request.json
    email = data.get('email')
    result = users_collection.delete_one({"email": email})
    if result.deleted_count == 0:
        return jsonify({"message": "User not found"}), 404
    return jsonify({"message": "User deleted successfully"})


@app.route('/api/chatbot/predict', methods=['POST'])
def chatbot_predict():
    try:
        data = request.get_json(force=True)  # Ensures JSON parsing
        if not isinstance(data, dict):  # Check if data is a dictionary
            return jsonify({"error": "Invalid JSON format"}), 400

        message = data.get('message')
        if not message:
            return jsonify({"error": "Message is required"}), 400

        response = predict_response(message)
        return jsonify({"response": response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True, port=PORT)
