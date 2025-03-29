// components/DateTimePicker.jsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = ({ selected, onChange }) => {
  return (
    <div>
      <label className="block mb-1">Tarih / Saat</label>
      <DatePicker
        selected={selected}
        onChange={onChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="dd.MM.yyyy HH:mm"
        className="w-full border px-3 py-2 rounded"
        calendarClassName="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default DateTimePicker;
