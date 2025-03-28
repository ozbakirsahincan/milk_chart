import { useEffect, useState } from "react";
import axios from "axios";

const useFeedingLogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchLogs = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/feeding-logs");
      setData(res.data);
    } catch (err) {
      console.error("Veri çekme hatası:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLogs();
  }, []);

  return { data, loading };
};

export default useFeedingLogs;
