import json
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/test')
def test():
    return jsonify({"message": "Backend connected"})

@app.route('/api/snap')
def get_snap_locations():
    with open('snap_data.json') as f:
        data = json.load(f)
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True, port=5050)    