import { isFunction, get } from '@antv/util';
import { Types } from '@antv/g2';
import { Params } from '../../core/adaptor';
import { polygon as polygonAdaptor } from '../../adaptor/geometries';
import { interaction, animation, theme, annotation } from '../../adaptor/common';
import { flow, findGeometry, transformLabel, deepAssign } from '../../utils';
import { Datum } from '../../types';
import { transformData } from './utils';
import { SunburstOptions } from './types';
import { RAW_FIELDS, SUNBURST_ANCESTOR_FIELD, SUNBURST_PATH_FIELD } from './constant';

/**
 * geometry 配置处理
 * @param params
 */
function geometry(params: Params<SunburstOptions>): Params<SunburstOptions> {
  const { chart, options } = params;
  const { color, colorField = SUNBURST_ANCESTOR_FIELD, sunburstStyle } = options;
  const data = transformData(options);
  chart.data(data);

  // 特殊处理下样式，如果没有设置 fillOpacity 的时候，默认根据层级进行填充透明度
  let style;
  if (sunburstStyle) {
    style = (datum: Datum) => {
      return deepAssign(
        {},
        {
          fillOpacity: 0.85 ** datum.depth,
        },
        isFunction(sunburstStyle) ? sunburstStyle(datum) : sunburstStyle
      );
    };
  }

  // geometry
  polygonAdaptor(
    deepAssign({}, params, {
      options: {
        xField: 'x',
        yField: 'y',
        seriesField: colorField,
        rawFields: [...(options.rawFields || []), ...RAW_FIELDS],
        polygon: {
          color,
          style,
        },
      },
    })
  );

  return params;
}

/**
 * axis 配置
 * @param params
 */
export function axis(params: Params<SunburstOptions>): Params<SunburstOptions> {
  const { chart } = params;
  chart.axis(false);
  return params;
}

/**
 * legend 配置（旭日图暂时不支持图例，后续需要支持的话，得自定义数据筛选）
 * @param params
 * @returns
 */
function legend(params: Params<SunburstOptions>): Params<SunburstOptions> {
  const { chart } = params;

  chart.legend(false);
  return params;
}

/**
 * 数据标签
 * @param params
 */
function label(params: Params<SunburstOptions>): Params<SunburstOptions> {
  const { chart, options } = params;
  const { label } = options;

  const geometry = findGeometry(chart, 'polygon');

  // label 为 false, 空 则不显示 label
  if (!label) {
    geometry.label(false);
  } else {
    //   const { callback, ...cfg } = label;
    geometry.label(label);
  }

  return params;
}

/**
 * coord 配置
 * @param params
 */
function coordinate(params: Params<SunburstOptions>): Params<SunburstOptions> {
  const { chart, options } = params;
  const { innerRadius, radius, reflect } = options;

  const coord = chart.coordinate({
    type: 'polar',
    cfg: {
      innerRadius,
      radius,
    },
  });
  if (reflect) {
    coord.reflect(reflect);
  }

  return params;
}

/**
 * scale 配置
 * @param params
 */
function scale(params: Params<SunburstOptions>): Params<SunburstOptions> {
  const { chart, options } = params;
  const { meta } = options;

  if (meta) {
    // @ts-ignore
    chart.scale(meta);
  }

  return params;
}

/**
 * tooltip 配置
 * @param params
 */
export function tooltip(params: Params<SunburstOptions>): Params<SunburstOptions> {
  const { chart, options } = params;
  const { tooltip } = options;

  if (tooltip === false) {
    chart.tooltip(false);
  } else {
    let tooltipOptions = tooltip;
    // 设置了 fields，就不进行 customItems 了
    if (!get(tooltip, 'fields')) {
      tooltipOptions = deepAssign(
        {},
        {
          customItems: (items: Types.TooltipItem[]) =>
            items.map((item) => ({ ...item, name: item.data[SUNBURST_PATH_FIELD], value: item.data.value })),
        },
        tooltipOptions
      );
    }
    chart.tooltip(tooltipOptions);
  }

  return params;
}

/**
 * 旭日图适配器
 * @param chart
 * @param options
 */
export function adaptor(params: Params<SunburstOptions>) {
  // flow 的方式处理所有的配置到 G2 API
  return flow(
    geometry,
    theme,
    axis,
    scale,
    legend,
    coordinate,
    tooltip,
    label,
    interaction,
    animation,
    annotation()
  )(params);
}
