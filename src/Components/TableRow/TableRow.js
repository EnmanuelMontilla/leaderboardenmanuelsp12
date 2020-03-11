import React from 'react';
import './TableRow.css';

const TableRow = (props) => {
  const {pos, score, researcher, member_since} = props.rowData;

  return (
    <tr>
      <td>{pos}</td>
      <td align="left">
        <a href="#" target="_blank" >
          <img className="profile-image"  ></img>
          <span className="profile-name">{researcher}</span>
        </a>
      </td>
      <td>{score}</td>
      <td>{member_since}</td>
    </tr>
  )
}

export default TableRow;
