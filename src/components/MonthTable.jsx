import React, { Component } from 'react'

export default class MonthTable extends Component {
  render() {
    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
                {this.props.list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
  }
}
