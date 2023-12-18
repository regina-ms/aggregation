import React, { Component } from 'react'

export default class SortTable extends Component {
  render() {
    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                {this.props.list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
  }
}
