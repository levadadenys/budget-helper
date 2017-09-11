import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import moment from 'moment';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'];

class IncomeAndExpensesChart extends React.Component {
  static defaultProps = {
    items: [],
    categories: [],
    colors: [],
    titleClassName: ''
  };

  constructor (props) {
    super(props);

    this.state = {chartsData: this.buildChartsByMonth(props)};
  }

  componentWillReceiveProps (props) {
    this.setState({chartsData: this.buildChartsByMonth(props)});
  }

  buildChartsByMonth (props) {
    let parsedData = [];
    let dataByMonths = {};
    let usedMonths;

    props.items.forEach(item => {
      const MONTH = moment(item.date).month();

      if (!dataByMonths[MONTH]) {
        dataByMonths[MONTH] = [];
      }

      dataByMonths[MONTH].push(item);
    });

    usedMonths = Object.keys(dataByMonths);

    usedMonths.forEach(
      monthIndex => {
        let name = MONTHS[monthIndex];
        let valuesByCategories = {};

        props.categories.forEach(category => {
          valuesByCategories[category.name] = dataByMonths[monthIndex].filter(
            item => item.category === category.id).reduce(
            (a, b) => parseInt(a, 10) + parseInt(b.sum, 10), 0);
        });

        parsedData.push({name, ...valuesByCategories});
      });

    return parsedData;
  }

  render () {
    const DATA = this.state.chartsData;
    let colors = this.props.colors.slice();
    return (
      <div className='col-md-10 col-md-offset-1' style={{'height': 'initial'}}>
        <h4 className={this.props.titleClassName}>
          <strong>{this.props.title}</strong></h4>
        <ResponsiveContainer debounce={400} aspect={4}>
          <BarChart data={DATA}
                    marging={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="4 4" />
            <Tooltip />
            <Legend />
            {
              this.props.categories.map(category =>
                <Bar dataKey={category.name} stackId={this.props.title}
                     key={category.id} fill={colors.length
                  ? colors.pop()
                  : this.props.colors[Math.floor(Math.random() *
                    this.props.colors.length)]} />
              )
            }
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default IncomeAndExpensesChart;