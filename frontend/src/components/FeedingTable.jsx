import React from "react";
import useFeedingLogs from "../hooks/useFeedingLogs";

const FeedingTable = () => {
  const { data, loading } = useFeedingLogs();

  if (loading) return <p className="p-4">Veriler yükleniyor...</p>;

  return (
    <div className="overflow-x-auto shadow rounded-xl bg-white p-4">
      <h2 className="text-lg font-semibold mb-4">Beslenme Takibi</h2>
      <table className="min-w-full text-sm text-gray-700">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Tarih/Saat</th>
            <th className="px-4 py-2">Çiş</th>
            <th className="px-4 py-2">Kaka</th>
            <th className="px-4 py-2">Yapılan Mama (ml)</th>
            <th className="px-4 py-2">İçilen Mama (ml)</th>
            <th className="px-4 py-2">Kalan Mama (ml)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{entry.datetime}</td>
              <td className="px-4 py-2">{entry.pee ? "✅" : "❌"}</td>
              <td className="px-4 py-2">{entry.poop ? "✅" : "❌"}</td>
              <td className="px-4 py-2">{entry.madeMilk}</td>
              <td className="px-4 py-2">{entry.drankMilk}</td>
              <td className="px-4 py-2">{entry.remainingMilk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedingTable;
