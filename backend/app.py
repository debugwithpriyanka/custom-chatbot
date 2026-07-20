from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_ollama import OllamaLLM

app = Flask(__name__)
CORS(app)

llm = OllamaLLM(model="llama3")

@app.route("/chat", methods=["POST"])
def chat():

    data = request.json
    msg = data["message"]

    response = llm.invoke(msg)

    print(response)
    print(type(response))

    return jsonify({
        "response": response
    })

if __name__ == "__main__":
    app.run(debug=True)