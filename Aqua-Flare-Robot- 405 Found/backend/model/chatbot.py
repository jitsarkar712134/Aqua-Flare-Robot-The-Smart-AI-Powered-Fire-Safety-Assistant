import json
import pickle
import numpy as np
import pandas as pd
import re
import nltk
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split

nltk.download('punkt')

# Load the dataset
df = pd.read_csv(
    "./fire-app-server/data/bot.csv", delimiter=",").fillna("")


# Preprocess text function
def preprocess_text(text):
    text = re.sub(r"http\S+|www\S+|@\S+|#\S+|[^a-zA-Z0-9\s]", "", text.lower().strip())
    words = word_tokenize(text)
    return " ".join(words)


# Apply preprocessing
df["Processed_Questions"] = df["questions"].apply(preprocess_text)

# TF-IDF Vectorization
vectorizer = TfidfVectorizer(max_features=5000, ngram_range=(1, 2))
X = vectorizer.fit_transform(df["Processed_Questions"])

# Encode responses as indices
responses = df["answers"].tolist()
response_dict = {i: resp for i, resp in enumerate(responses)}
y = np.array(list(response_dict.keys()))

# Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


model = SVC(kernel="linear", probability=True)
model.fit(X_train, y_train)

# Save as a pipeline
pipeline = Pipeline([("tfidf", vectorizer), ("model", model)])
with open("chatbot_pipeline.pkl", "wb") as f:
    pickle.dump({"pipeline": pipeline, "responses": response_dict}, f)

print("✅ Chatbot Model Trained & Saved!")







