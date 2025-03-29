import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { tr } from "date-fns/locale";

registerLocale("tr", tr);

const Create = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      datetime: new Date(),
      pee: false,
      poop: false,
      made_milk: "",
      drank_milk: "",
      remaining_milk: "",
      description: ""
    },
    validationSchema: Yup.object({
      datetime: Yup.date().required("Tarih gerekli"),
      made_milk: Yup.number().required("Zorunlu").min(0),
      drank_milk: Yup.number().required("Zorunlu").min(0),
      remaining_milk: Yup.number().required("Zorunlu").min(0),
      description: Yup.string()
    }),
    onSubmit: async (values) => {
      try {
        await axios.post("http://127.0.0.1:8000/api/feeding-logs", values);
        navigate("/");
      } catch (err) {
        console.error("Kayıt eklenemedi:", err);
      }
    }
  });

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Yeni Beslenme Kaydı</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Tarih / Saat */}
        <div>
          <label className="block mb-1">Tarih / Saat</label>
          <DatePicker
            selected={formik.values.datetime}
            onChange={(val) => formik.setFieldValue("datetime", val)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="dd.MM.yyyy HH:mm"
            locale="tr"
            className="w-full border px-3 py-2 rounded"
          />
          {formik.touched.datetime && formik.errors.datetime && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.datetime}</p>
          )}
        </div>

        {/* Çiş ve Kaka */}
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="pee"
              checked={formik.values.pee}
              onChange={formik.handleChange}
            />
            Çiş
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="poop"
              checked={formik.values.poop}
              onChange={formik.handleChange}
            />
            Kaka
          </label>
        </div>

        {/* Yapılan Mama */}
        <div>
          <label className="block mb-1">Yapılan Mama (ml)</label>
          <input
            type="number"
            name="made_milk"
            value={formik.values.made_milk}
            onChange={formik.handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* İçilen Mama */}
        <div>
          <label className="block mb-1">İçilen Mama (ml)</label>
          <input
            type="number"
            name="drank_milk"
            value={formik.values.drank_milk}
            onChange={formik.handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Kalan Mama */}
        <div>
          <label className="block mb-1">Kalan Mama (ml)</label>
          <input
            type="number"
            name="remaining_milk"
            value={formik.values.remaining_milk}
            onChange={formik.handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Açıklama */}
        <div>
          <label className="block mb-1">Açıklama / Description</label>
          <input
            type="text"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Buton */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Kaydı Ekle
        </button>
      </form>
    </div>
  );
};

export default Create;
