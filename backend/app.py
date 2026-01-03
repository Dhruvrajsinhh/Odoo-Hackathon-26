from firebase_config import db

@app.route("/test-db")
def test_db():
    db.collection("test").add({"msg": "Firestore connected"})
    return jsonify({"db": "connected"})
