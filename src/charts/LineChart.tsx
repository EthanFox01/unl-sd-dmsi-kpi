import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import parseFile from '../feature/processNumericalFiles';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

var labels = [];

var data1;
var data2;

export const data = {
  labels,
  datasets: [
    {
      label: 'Point 1',
      data: data1,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Point 2',
      data: data2,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const LineChart = () => {
  const files = useSelector((state:RootState) => state.import.value);
  const jsonFile = JSON.parse(files);

  const numericalMap = parseFile(jsonFile);

  var currentNumberString;
  for(let i = 1; i < jsonFile.length + 1; i++){
    currentNumberString = i.toString();
    console.log(currentNumberString);
    labels.push(currentNumberString);
  }

  const mapIterator = numericalMap.values();
  const keyMapIterator = numericalMap.keys();
  const dataLabels = [];
  dataLabels.push(keyMapIterator.next().value);
  dataLabels.push(keyMapIterator.next().value);

  data1 = mapIterator.next().value;
  data2 = mapIterator.next().value;
  data.datasets[0].label = dataLabels[0];
  data.datasets[1].label = dataLabels[1];
  data.datasets[0].data = data1;
  data.datasets[0].data = data1;
  data.datasets[1].data = data1;
  data.datasets[1].data = data2;

  return <Line options={options} data={data} />;
}

export default LineChart;
