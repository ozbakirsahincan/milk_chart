from pymongo import MongoClient

# MongoDB bağlantı bilgileri
MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "milk_chart"
COLLECTION_NAME = "chart"
COUNTER_COLLECTION_NAME = "counters"

# MongoDB bağlantısını oluştur
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db[COLLECTION_NAME]
counter_collection = db[COUNTER_COLLECTION_NAME]


# Sayaç koleksiyonunu başlat
def initialize_counter():
    if counter_collection.find_one({"_id": "chart_id"}) is None:
        counter_collection.insert_one({"_id": "chart_id", "seq": 0})


# Bağlantıyı test et
def test_connection():
    try:
        # Ping the database
        client.admin.command('ping')
        print("MongoDB bağlantısı başarılı!")
        return True
    except Exception as e:
        print(f"MongoDB bağlantı hatası: {e}")
        return False
