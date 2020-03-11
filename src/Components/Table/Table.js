import React, { Component } from 'react';

import TableRow from '../TableRow/TableRow';
import './Table.css';

const url = `https://fcctop100.herokuapp.com/api/fccusers/top/`;

const data = [
  {
    pos: "12",
    score: "9229",
    researcher: "enmanuel",
    member_since: "20/12/20"
  },
  {
    pos: "4",
    score: "9109",
    researcher: "Gilberto",
    member_since: "29/10/20"
  },
  {
    pos: "1",
    score: "9923",
    researcher: "Kevin",
    member_since: "20/10/10"
  },
]
class Table extends Component {
  constructor() {
    super();

    this.state = {
      defaultData: []
    };
  }

  componentDidMount() {
    this.setState({
      defaultData: data
    });
  }

  render() {
    const rows = this.state.defaultData.map((rowData, i) => {
      return <TableRow key={i} id={i+1} rowData={rowData} />
    });

    return (
      <table>
        <tbody>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Researcher</th>
            <th scope="col">Score</th>
            <th scope="col">Member since</th>
          </tr>
          {rows}
          </tbody>
      </table>
    )
  }
}

export default Table;