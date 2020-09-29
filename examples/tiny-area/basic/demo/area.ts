import { TinyArea } from '@antv/g2plot';

const tinyArea = new TinyArea('container', {
  height: 60,
  width: 300,
  autoFit: false,
  data: new Array(100).fill(0).map(() => Math.random() * 100),
  smooth: true,
  tooltip: {
    customContent: function (x, data) {
      return `NO.${x}: ${data[0]?.data?.y.toFixed(2)}`;
    },
  },
});

tinyArea.render();
