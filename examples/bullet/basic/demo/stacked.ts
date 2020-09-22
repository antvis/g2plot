import { Bullet } from '@antv/g2plot';

const data = [
  {
    title: '满意度',
    ranges: [40, 70, 100],
    measures: [30, 50],
    target: 85,
  },
];

const bulletPlot = new Bullet('container', {
  data,
  measureField: 'measures',
  rangeField: 'ranges',
  targetField: 'target',
  xField: 'title',
  bulletColor: {
    range: ['#FFB1AC', '#FFDBA2', '#B4EBBF'],
    measure: ['#5B8FF9', '#5AD8A6'],
    target: '#5B8FF9',
  },
  bulletLabel: {
    measure: {
      position: 'middle',
      style: {
        fill: '#fff',
      },
    },
  },
  xAxis: {
    line: null,
  },
  yAxis: false,
  tooltip: {
    showMarkers: false,
    shared: true,
  },
  // 自定义 legend
  legend: {
    custom: true,
    position: 'bottom',
    items: [
      {
        value: '差',
        name: '差',
        marker: { symbol: 'square', style: { fill: '#FFB1AC', r: 5 } },
      },
      {
        value: '良',
        name: '良',
        marker: { symbol: 'square', style: { fill: '#FFDBA2', r: 5 } },
      },
      {
        value: '优',
        name: '优',
        marker: { symbol: 'square', style: { fill: '#B4EBBF', r: 5 } },
      },
      {
        value: '第一季度',
        name: '第一季度',
        marker: { symbol: 'square', style: { fill: '#5B8FF9', r: 5 } },
      },
      {
        value: '第二季度',
        name: '第二季度',
        marker: { symbol: 'square', style: { fill: ' #5AD8A6', r: 5 } },
      },
      {
        value: '目标值',
        name: '目标值',
        marker: { symbol: 'line', style: { stroke: '#5B8FF9', r: 5 } },
      },
    ],
  },
});

bulletPlot.render();
