from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/snap')
def get_snap_locations():
    with open('snap_data.json') as f:
        data = json.load(f)
    return jsonify(data)


@app.route('/api/test')
def test():
    return jsonify({"message": "Backend connected"})

if __name__ == '__main__':
    app.run(debug=True, port=5050)    