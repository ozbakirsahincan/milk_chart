from flask import Flask, request, jsonify
from flask_cors import CORS
from bson import ObjectId
from mongo_config import collection, counter_collection, test_connection
from datetime import datetime

app = Flask(__name__)
CORS(app)

# MongoDB bağlantısını test et
test_connection()

@app.route("/")
def hello():
    return {"msg": "hello"}

@app.route("/chart", methods=["GET"])
def get_chart():
    try:
        # MongoDB'den tüm kayıtları al
        chart_data = list(collection.find())
        
        # ID'ye göre sırala
        chart_data.sort(key=lambda x: x['_id'])
            
        return jsonify(chart_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/chart", methods=["POST"])
def add_chart():
    try:
        new_data = request.json
        
        # Tarih bilgilerini string formatında ekle
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        new_data['created_date'] = current_time
        new_data['updated_date'] = current_time
        
        # Sayaç koleksiyonundan bir sonraki ID'yi al
        counter = counter_collection.find_one_and_update(
            {"_id": "chart_id"},
            {"$inc": {"seq": 1}},
            return_document=True
        )
        
        # _id olarak sayaç değerini kullan
        new_data['_id'] = counter['seq']
        
        # MongoDB'ye kaydet
        result = collection.insert_one(new_data)
        
        return jsonify({"message": "Veri başarıyla eklendi", "data": new_data}), 201
    except Exception as e:
        print(f"Hata: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route("/chart/<int:id>", methods=["DELETE"])
def delete_chart(id):
    try:
        result = collection.delete_one({"_id": id})
        if result.deleted_count > 0:
            return jsonify({"message": "Kayıt başarıyla silindi"}), 200
        return jsonify({"error": "Kayıt bulunamadı"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/chart/<int:id>", methods=["PUT"])
def update_chart(id):
    try:
        update_data = request.json
        update_data['updated_date'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        result = collection.update_one(
            {"_id": id},
            {"$set": update_data}
        )
        
        if result.modified_count > 0:
            updated_item = collection.find_one({"_id": id})
            return jsonify({"message": "Kayıt başarıyla güncellendi", "data": updated_item}), 200
        
        return jsonify({"error": "Kayıt bulunamadı"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
