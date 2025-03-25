import React from 'react'

const ChartItem = ({_id, date, end_date, pee, poop, total_milk, drinking_milk, remaining_milk, user}) => {
  return (
    <tr>
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
        <button className="btn btn-danger me-2">Sil</button>
        <button className="btn btn-info">Güncelle</button>
      </td>
    </tr>
  )
}

export default ChartItem