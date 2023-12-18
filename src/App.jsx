import React from 'react';
import './App.css';
import MonthTable from './components/MonthTable';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';
import { withSorting } from './components/withSorting';

const SortedYearTable = withSorting('year')(YearTable)
const SortedMonthTable = withSorting('month', '2018')(MonthTable)
const SortedTable = withSorting()(SortTable)

export default class App extends React.Component {
  state = {
    list: [],
    url: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json'
  };

  componentDidMount() {
    fetch(this.state.url).then(data => data.json()).then(data => this.setState({ list: data.list, url: this.state.url }))
  }

  render() {
    const { list } = this.state;
    return (
      <div id="app">
        <SortedMonthTable list={list} />
        <SortedYearTable list={list} />
        <SortedTable list={list} />
      </div>
    );
  }
}
