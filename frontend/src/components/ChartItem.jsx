import React from 'react';
import axios from 'axios';

const ChartItem = ({ _id, date, end_date, pee, poop, total_milk, drinking_milk, remaining_milk, user }) => {
  const handleDelete = async () => {
    try {
      await onDelete(_id);
    } catch (error) {
      console.error('Silme işlemi başarısız:', error);
    }
  };

  return (
    <tr className="hover:bg-gray-50">
      <th scope="row">{_id}</th>
      <td>{date}</td>
      <td>{end_date}</td>
      <td>{pee}</td>
      <td>{poop}</td>
      <td>{total_milk}</td>
      <td>{drinking_milk}</td>
      <td>{remaining_milk}</td>
      <td>{user}</td>
      <td>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 me-2"
        >
          Sil
        </button>
        <button className="btn btn-info">Güncelle</button>
      </td>
    </tr>
  );
};

export default ChartItem;