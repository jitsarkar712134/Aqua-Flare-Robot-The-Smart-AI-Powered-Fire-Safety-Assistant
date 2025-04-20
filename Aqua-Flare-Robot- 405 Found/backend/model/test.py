import pickle

with open('/Users/skmirajulislam/Documents/chatbot_pipeline.pkl', 'rb') as f:
    data = pickle.load(f)
    pipeline = data["pipeline"]
    response_dict = data["responses"]


def get_chatbot_response(user_input):
    vectorized_input = pipeline.named_steps["tfidf"].transform([user_input])
    predicted_response_index = pipeline.named_steps["model"].predict(vectorized_input)[
        0]
    return response_dict.get(predicted_response_index, "Sorry, I didn't understand that.")


# Extended Test Cases
test_cases = [
    ("how fast can you respond to a fire",
     "I can detect and start responding to fires within seconds of detection."),
    ("what's your response time",
     "My AI processes data in real-time, allowing near-instantaneous response to threats."),
    ("can you work in the dark",
     "I use infrared sensors and thermal imaging to operate in complete darkness."),
    ("do you need wifi",
     "I operate offline by default but use Wi-Fi for updates and remote alerts."),
    ("how heavy are you", "I weigh 50 kg for stability, but my wheels allow smooth movement."),
    ("can you detect movement",
     "Yes! My motion sensors help me navigate and detect obstacles in real time."),
    ("can you be controlled remotely",
     "Yes! Firefighters can operate me via a remote control or a mobile app."),
    ("can you work in the rain",
     "Yes! My waterproof design allows me to function in heavy rain without issues."),
    ("how do you detect gas leaks",
     "I use specialized gas sensors to identify hazardous leaks and alert responders."),
    ("can you send live footage",
     "Yes! I provide real-time video streaming to command centers for better decision-making."),
    ("how fast can you respond to a fire",
     "I can detect and start responding to fires within seconds of detection."),
    ("what's your response time",
     "My AI processes data in real-time, allowing near-instantaneous response to threats."),
    ("can you work in the dark",
     "I use infrared sensors and thermal imaging to operate in complete darkness."),
    ("do you need wifi",
     "I operate offline by default but use Wi-Fi for updates and remote alerts."),
    ("how heavy are you", "I weigh 50 kg for stability, but my wheels allow smooth movement."),
    ("can you detect movement",
     "Yes! My motion sensors help me navigate and detect obstacles in real time."),
    ("can you be controlled remotely",
     "Yes! Firefighters can operate me via a remote control or a mobile app."),
    ("can you work in the rain",
     "Yes! My waterproof design allows me to function in heavy rain without issues."),
    ("how do you detect gas leaks",
     "I use specialized gas sensors to identify hazardous leaks and alert responders."),
    ("can you send live footage",
     "Yes! I provide real-time video streaming to command centers for better decision-making."),
    ("hi", "Hello there! How can I assist you today."),
    ("hi", "Hi! Welcome to the Aqua Flare chatbot."),
    ("hi", "Greetings! How can I help?"),
    ("hello", "Hello there! How can I assist you today."),
    ("hello", "Hi! Welcome to the Aqua Flare chatbot."),
    ("hello", "Greetings! How can I help?"),
    ("hey", "Hello there! How can I assist you today."),
    ("hey", "Hi! Welcome to the Aqua Flare chatbot."),
    ("hey", "Greetings! How can I help?"),
    ("greetings", "Hello there! How can I assist you today."),
    ("greetings", "Hi! Welcome to the Aqua Flare chatbot."),
    ("greetings", "Greetings! How can I help?"),
    ("how are you", "I am functioning perfectly! How about you?"),
    ("how are you", "All good here! How can I help?"),
    ("how are you", "Ready and waiting for your questions."),
    ("what's up", "I am functioning perfectly! How about you?"),
    ("what's up", "All good here! How can I help?"),
    ("what's up", "Ready and waiting for your questions."),
]

print("\n\033[94mTesting the chatbot pipeline with various queries:\033[0m\n")
for query, expected in test_cases:
    predicted = get_chatbot_response(query)
    print(f"User Query: {query}")
    if predicted == expected:
        print(f"Predicted Response: {predicted} (✅ Matched Expected)")
    else:
        print(
            f"\033[91mPredicted Response: {predicted} (❌ Expected: {expected})\033[0m")
    print("-" * 80)

print(
    "\n\033[92m✅ Chatbot test cases completed! Review the results above.\033[0m\n")
