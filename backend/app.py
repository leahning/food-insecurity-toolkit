from flask import Flask, jsonify
from flask_cors import CORS

import json
import pandas as pd
import os


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

SNAP_DATA_PATH = os.path.join('data', 'snap_cleaned.csv')
snap_df = pd.read_csv(SNAP_DATA_PATH)

@app.route('/api/test')
def test():
    return jsonify({"message": "Backend connected"})

@app.route('/api/snap')
def get_snap_locations():
    data = snap_df[['Store Name', 'Street Number', 'Street Name', 'City', 'State', 'Zip Code', 'Latitude', 'Longitude']]

    results = [] # format each row into a dict
    for _, row in data.iterrows():
        full_addr = f"{row['Street Number']} {row['Street Name']}, {row['City']}, {row['State']} {row['Zip Code']}"
        results.append({
            'name': row['Store Name'].strip(),
            'address': full_addr.strip(),
            'lat': row['Latitude'],
            'lon': row['Longitude']
        })

    return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True, port=5050)    