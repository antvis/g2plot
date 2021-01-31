import { MultiView } from '@antv/g2plot';

/** Generater a data array of 30 items */
const data = new Array(30).fill(1).map((d, idx) => ({ x: `${idx}`, y: idx + Math.random() * 10 }));
const views = [];

const effects = [
  'easeLinear',
  'easeQuadIn',
  'easeQuadOut',
  'easeQuadInOut',
  'easeCubicIn',
  'easeCubicOut',
  'easeCubicInOut',
  'easePolyIn',
  'easePolyOut',
  'easePolyInOut',
  'easeSinIn',
  'easeSinOut',
  'easeSinInOut',
  'easeExpIn',
  'easeExpOut',
  'easeExpInOut',
  'easeCircleIn',
  'easeCircleOut',
  'easeCircleInOut',
  'easeElasticIn',
  'easeElasticOut',
  'easeElasticInOut',
  'easeBounceIn',
  'easeBounceOut',
  'easeBounceInOut',
  'easeBackIn',
  'easeBackOut',
  'easeBackInOut',
];
const colors = [
  '#5B8FF9',
  '#CDDDFD',
  '#61DDAA',
  '#CDF3E4',
  '#65789B',
  '#CED4DE',
  '#F6BD16',
  '#FCEBB9',
  '#7262fd',
  '#D3CEFD',
  '#78D3F8',
  '#D3EEF9',
  '#9661BC',
  '#DECFEA',
  '#F6903D',
  '#FFE0C7',
  '#008685',
  '#BBDEDE',
  '#F08BB4',
  '#FFE0ED',
];

const ROWS = 5;
const COLS = 4;
for (let i = 0; i < ROWS; i++) {
  for (let j = 0; j < COLS; j++) {
    if (i * ROWS + j >= effects.length) {
      break;
    }
    const effect = effects[i * ROWS + j];
    views.push({
      data,
      region: {
        start: { x: j / COLS + 0.04 * ((i * COLS + j) % COLS > 0 ? 1 : 0), y: i / ROWS },
        end: { x: (j + 1) / COLS, y: (i + 1) / ROWS - 0.04 * (i < COLS ? 1 : 0) },
      },
      axes: {
        y: false,
        x: { line: null, grid: null, ticks: false, position: 'top', title: { text: effect } },
      },
      tooltip: { title: effect },
      animation: {
        appear: {
          animation: 'wave-in',
          easing: effect,
          duration: 5000,
          delay: 0,
        },
      },
      geometries: [
        {
          type: 'line',
          xField: 'x',
          yField: 'y',
          mapping: {
            color: colors[i * COLS + j],
          },
        },
      ],
    });
  }
}

const plot = new MultiView('container', { views });
plot.render();
