import { Plot } from '../../core/plot';
import { LineOptions } from './types';
import { LineAdaptor } from './adaptor';
import { Adaptor } from '../../core/adaptor';

export class Line extends Plot<LineOptions> {
  /** 图表类型 */
  public type: string = 'line';

  /**
   * 获取 折线图 的适配器
   */
  protected getSchemaAdaptor(): Adaptor<LineOptions> {
    return new LineAdaptor();
  }
}
