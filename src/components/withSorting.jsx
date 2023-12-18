import React from "react";
import moment from "moment";

export const withSorting = (sortingBy = 'date', year = '2018') => (Component) => {
    return class extends React.Component {
        sort() {
            this.props.list.sort((a, b) => moment(a.date) - moment(b.date));
            let sorted;
            switch (sortingBy) {
                case 'year':
                    sorted = this.props.list.map(el => {
                        const year = moment(el.date).format('YYYY')
                        const newEl = {
                            year,
                            amount: el.amount
                        }
                        return newEl
                    })
                    break

                case 'month':
                    const monthInYear = sorted = this.props.list.filter((el) => moment(el.date).format('YYYY') === year)
                    sorted = monthInYear.map(el => {
                        const month = moment(el.date).format('MMM')
                        const newEl = {
                            month,
                            amount: el.amount
                        }
                        return newEl
                    })
                    break
                default:
                    sorted = this.props.list
            }
            return sorted
        }

        componentDidMount() {
            this.setState({ list: this.sort() })
        }

        componentDidUpdate(prevProps, prevState) {
            if (this.props.list !== prevProps.list) {
                this.setState({ list: this.sort() })
            }
        }

        render() {
            return <Component {...this.props} {...this.state} />;
        }
    }
}