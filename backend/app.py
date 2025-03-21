from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

chart = [
    {
        "id": 1,
        "date": "13:40",
        "end_date":"14:20",
        "pee": "var",
        "poop": "yok",
        "total_milk": 100,
        "drinking_milk": 45,
        "remaining_milk": 55,
        "breastfeeding":"Yok",
        "user": "sıddıka",
        "updated_date": "",
        "created_date": ""
    },
    {
        "id": 2,
        "date": "16:20",
        "end_date":"17:05",
        "pee": "var",
        "poop": "yok",
        "total_milk": 70,
        "drinking_milk": 40,
        "remaining_milk": 30,
        "breastfeeding":"YOK",
        "user": "sahincan",
        "updated_date": "",
        "created_date": "",
    }
]


@app.route("/")
def hello():
    return {"msg": "hello"}

@app.route("/chart")
def get_chart():
    return chart

@app.route("/chart", methods=["POST"])
def add_chart():
    new_data = request.json
    if not new_data:
        return {"error": "Veri bulunamadı"}, 400
    
    # Yeni veriye otomatik ID atama
    new_id = max([item["id"] for item in chart]) + 1 if chart else 1
    new_data["id"] = new_id
    
    chart.append(new_data)
    return {"message": "Veri başarıyla eklendi", "data": new_data}, 201
