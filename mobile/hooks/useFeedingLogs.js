import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";

const useFeedingLogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLogs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/feeding-logs`);
      setData(res.data);
      setError(null);
    } catch (err) {
      console.error("Veri çekme hatası:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return { data, loading, error };
};

export default useFeedingLogs;

