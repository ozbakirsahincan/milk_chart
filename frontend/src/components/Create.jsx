import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    datetime: "",
    pee: false,
    poop: false,
    made_milk: "",
    drank_milk: "",
    remaining_milk: "",
    description:""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/feeding-logs/", form);
      navigate("/"); // Başarılıysa listeye dön
    } catch (err) {
      console.error("Kayıt eklenemedi:", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Yeni Beslenme Kaydı</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Tarih / Saat</label>
          <input
            type="datetime-local"
            name="datetime"
            value={form.datetime}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="pee" checked={form.pee} onChange={handleChange} />
            Çiş
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="poop" checked={form.poop} onChange={handleChange} />
            Kaka
          </label>
        </div>
        <div>
          <label className="block mb-1">Yapılan Mama (ml)</label>
          <input
            type="number"
            name="made_milk"
            value={form.made_milk}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">İçilen Mama (ml)</label>
          <input
            type="number"
            name="drank_milk"
            value={form.drank_milk}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Kalan Mama (ml)</label>
          <input
            type="number"
            name="remaining_milk"
            value={form.remaining_milk}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Kaydı Ekle
        </button>
      </form>
    </div>
  );
};

export default Create;
