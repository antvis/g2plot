import { Plot } from '../../core/plot';
import { Adaptor } from '../../core/adaptor';
import { WaterfallOptions } from './types';
import { adaptor } from './adaptor';

export { WaterfallOptions };

/**
 * 瀑布图
 */
export class Waterfall extends Plot<WaterfallOptions> {
  /** 图表类型 */
  public readonly type: string = 'waterfall';

  /**
   * 获取 瀑布图 的适配器
   */
  protected getSchemaAdaptor(): Adaptor<WaterfallOptions> {
    return adaptor;
  }

  /**
   * 获取 瀑布图 的默认配置
   */
  protected getDefaultOptions(options: WaterfallOptions): Partial<WaterfallOptions> {
    const { yField } = options;
    return {
      tooltip: {
        showCrosshairs: false,
        showMarkers: false,
        shared: true,
        // tooltip 默认展示 y 字段值
        fields: [yField],
      },
      /** default: show label */
      label: {},
      /** default: show leaderLine */
      leaderLine: {
        style: {
          lineWidth: 1,
          stroke: '#8c8c8c',
          lineDash: [4, 2],
        },
      },
      /** default: show total */
      total: {
        label: '总计',
        style: {
          fill: 'rgba(0, 0, 0, 0.25)',
        },
      },
      interactions: [{ type: 'element-active' }],
      risingFill: '#f4664a',
      fallingFill: '#30bf78',
      waterfallStyle: {
        fill: 'rgba(0, 0, 0, 0.25)',
      },
    };
  }
}
