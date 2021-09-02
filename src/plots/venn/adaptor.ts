import { interaction, animation, theme, tooltip } from '../../adaptor/common';
import { Params } from '../../core/adaptor';
import { schema as schemaGeometry } from '../../adaptor/geometries/schema';
import { deepAssign, flow } from '../../utils';
import { layoutVennData } from './utils';
import { VennOptions } from './types';
import './shape';

/**
 * geometry 处理
 * @param params
 */
function geometry(params: Params<VennOptions>): Params<VennOptions> {
  const { chart, options } = params;
  const { data, tooltip, pointStyle } = options;

  // 获取容器大小
  const { width, height } = chart.viewBBox;
  const vennData = layoutVennData(data, width, height, 0 /** todo 获取内边距 padding */);
  chart.data(vennData);

  schemaGeometry(
    deepAssign({}, params, {
      options: {
        xField: 'x',
        yField: 'y',
        sizeField: 'size',
        seriesField: 'id',
        schema: {
          shape: 'venn',
          style: pointStyle,
        },
      },
    })
  );

  return params;
}

/**
 * meta 配置
 * @param params
 */
export function meta(params: Params<VennOptions>): Params<VennOptions> {
  return params;
}

/**
 * 默认关闭图例
 * @param params
 */
export function legend(params: Params<VennOptions>): Params<VennOptions> {
  const { chart } = params;

  chart.legend(false);

  return params;
}

/**
 * 默认关闭坐标轴
 * @param params
 */
export function axis(params: Params<VennOptions>): Params<VennOptions> {
  const { chart } = params;

  chart.axis(false);

  return params;
}

/**
 * 图适配器
 * @param chart
 * @param options
 */
export function adaptor(params: Params<VennOptions>) {
  // flow 的方式处理所有的配置到 G2 API
  return flow(
    theme,
    geometry,
    meta,
    legend,
    axis,
    tooltip,
    interaction,
    animation
    // ... 其他的 adaptor flow
  )(params);
}
