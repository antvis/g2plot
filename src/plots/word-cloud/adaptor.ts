import { deepMix } from '@antv/util';
import { Params } from '../../core/adaptor';
import { tooltip, interaction, animation, theme, scale, state } from '../../adaptor/common';
import { flow } from '../../utils';
import { point } from '../../adaptor/geometries';
import { WordCloudOptions } from './types';
import { transform } from './utils';

/**
 * geometry 配置处理
 * @param params
 */
function geometry(params: Params<WordCloudOptions>): Params<WordCloudOptions> {
  const { chart, options } = params;
  const { colorField, color } = options;
  const data = transform(params);

  chart.data(data);

  const p = deepMix({}, params, {
    options: {
      xField: 'x',
      yField: 'y',
      // 给 seriesField 一个默认值，否则它为空时
      // 每个词语的颜色会显示成白色。
      seriesField: colorField ? 'color' : 'text',
      point: {
        color,
        shape: 'word-cloud',
      },
    },
  });

  const { ext } = point(p);
  ext.geometry.label(false);

  chart.coordinate().reflect('y');
  chart.axis(false);
  chart.legend(false);

  return params;
}

/**
 * meta 配置
 * @param params
 */
function meta(params: Params<WordCloudOptions>): Params<WordCloudOptions> {
  return flow(
    scale({
      x: { nice: false },
      y: { nice: false },
    })
  )(params);
}

/**
 * 词云图适配器
 * @param chart
 * @param options
 */
export function adaptor(params: Params<WordCloudOptions>) {
  // flow 的方式处理所有的配置到 G2 API
  flow(geometry, meta, tooltip, interaction, animation, theme, state)(params);
}
