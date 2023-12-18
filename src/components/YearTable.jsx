import React, { Component } from 'react'


export default class YearTable extends Component {
  render() {
    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
                {this.props.list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
  }
}
