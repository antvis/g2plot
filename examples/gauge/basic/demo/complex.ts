import { Gauge } from '@antv/g2plot';

const ticks = [0, 1 / 3, 2 / 3, 1];
const color = ['#F4664A', '#FAAD14', '#30BF78'];
const gauge = new Gauge('container', {
  percent: 0,
  startAngle: Math.PI,
  endAngle: 2 * Math.PI,
  range: {
    ticks,
    color,
  },
  indicator: {
    pointer: {
      style: {
        stroke: '#D0D0D0',
      },
    },
    pin: {
      style: {
        stroke: '#D0D0D0',
      },
    },
  },
  statistic: {
    title: {
      formatter: ({ percent }) => {
        if (percent < ticks[1]) {
          return '差';
        }
        if (percent < ticks[2]) {
          return '中';
        }
        return '优';
      },
      style: ({ percent }) => {
        return {
          fontSize: '36px',
          lineHeight: '36px',
          color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
        };
      },
    },
    content: {
      style: {
        fontSize: '24px',
        color: '#4B535E',
        marginTop: '20px',
      },
      formatter: () => '系统表现',
    },
  },
});

gauge.render();
let data = 0;
const interval = setInterval(() => {
  if (data >= 1) {
    clearInterval(interval);
  }
  data += 0.1;
  gauge.changeData(data);
}, 1000);
