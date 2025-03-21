import React, { useState, useEffect } from "react";
import axios from "axios";
import ChartItem from "./ChartItem";

const fetchChart = async () => {
    try {
        const response = await axios.get("http://localhost:5000/chart");
        return response.data;
    } catch (error) {
        console.error("Veri çekerken hata oluştu:", error);
        return [];
    }
}

const Chart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const getChartData = async () => {
      const data = await fetchChart();
      setChartData(data);
    };
    getChartData();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Sıra No</th>
          <th scope="col">Tarih</th>
          <th scope="col">Bitiş Tarihi</th>
          <th scope="col">Çiş</th>
          <th scope="col">Kaka</th>
          <th scope="col">Emzirme</th>
          <th scope="col">Yapılan Mama</th>
          <th scope="col">İçilen Mama</th>
          <th scope="col">Kalan Mama</th>
          <th scope="col">Kullanıcı</th>
          <th>İşlem</th>
        </tr>
      </thead>
      <tbody>
        {chartData.map((item) => (
          <ChartItem 
            key={item.id}
            {...item}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Chart;
