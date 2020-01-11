import { CoordinateType } from '@antv/g2/lib/plot/interface';
import * as _ from '@antv/util';
import { registerPlotType } from '../../base/global';
import { LayerConfig } from '../../base/layer';
import ViewLayer, { ViewConfig } from '../../base/view-layer';
import { getComponent } from '../../components/factory';
import { getGeom } from '../../geoms/factory';
import { Label, DataItem } from '../../interface/config';
import { LooseMap } from '../../interface/types';
import './component/label/outer-label';
import './component/label/inner-label';
import './component/label/spider-label';
import * as EventParser from './event';
import './theme';
import { LineStyle } from '../line/layer';

interface PieStyle extends LineStyle {
  stroke?: string;
  lineWidth?: number;
}

export interface PieViewConfig extends ViewConfig {
  angleField: string;
  colorField?: string;
  radius?: number;
  pieStyle?: PieStyle | ((...args: any[]) => PieStyle);
  label?: PieLabel;
}

type PieLabel = ViewConfig['label'] & {
  offset?: string | number;
  /** label leader-line */
  line?: {
    smooth?: boolean;
  };
  /** allow label overlap */
  allowOverlap?: boolean;
  /** used in spider-label */
  alignTo?: string;
  readonly fields?: string[];
};

export interface PieLayerConfig extends PieViewConfig, LayerConfig {}

const G2_GEOM_MAP = {
  pie: 'interval',
};

const PLOT_GEOM_MAP = {
  pie: 'column',
};

export default class PieLayer<T extends PieLayerConfig = PieLayerConfig> extends ViewLayer<T> {
  public static getDefaultOptions(): any {
    return _.deepMix({}, super.getDefaultOptions(), {
      width: 400,
      height: 400,
      title: {
        visible: false,
      },
      description: {
        visible: false,
      },
      forceFit: true,
      padding: 'auto',
      radius: 0.8,
      label: {
        visible: true,
        type: 'inner',
        autoRotate: false,
        allowOverlap: false,
        line: {
          smooth: true,
        },
      },
      legend: {
        visible: true,
        position: 'right-center',
      },
      tooltip: {
        visible: true,
        shared: false,
        crosshairs: null,
      },
      pieStyle: {
        stroke: 'white',
        lineWidth: 1,
      },
    });
  }

  public pie: any;
  public type: string = 'pie';

  public getOptions(props: T) {
    const options = super.getOptions(props);
    // @ts-ignore
    const defaultOptions = this.constructor.getDefaultOptions();
    return _.deepMix({}, options, defaultOptions, props);
  }

  public afterInit() {
    super.afterInit();
  }

  protected geometryParser(dim, type) {
    if (dim === 'g2') {
      return G2_GEOM_MAP[type];
    }
    return PLOT_GEOM_MAP[type];
  }

  protected scale() {
    const props = this.options;
    const scales = {};
    scales[props.angleField] = {};
    scales[props.colorField] = { type: 'cat' };
    this.setConfig('scales', scales);
  }

  protected processData(data?: DataItem[]): DataItem[] | undefined {
    const key = this.options.angleField;
    return data.map((item) => ({
      ...item,
      [key]: typeof item[key] === 'string' ? Number.parseFloat(item[key] as 'string') : item[key],
    }));
  }

  protected axis() {}

  protected coord() {
    const props = this.options;
    const coordConfig = {
      type: 'theta' as CoordinateType,
      cfg: {
        radius: props.radius,
        // @ts-ignore 业务定制,不开放配置
        innerRadius: props.innerRadius || 0,
      },
    };
    this.setConfig('coord', coordConfig);
  }

  protected addGeometry() {
    const props = this.options;
    const pie = getGeom('interval', 'main', {
      plot: this,
      positionFields: [props.angleField],
    });
    pie.adjust = [{ type: 'stack' }];
    this.pie = pie;
    if (props.label) {
      this.label();
    }
    this.setConfig('element', pie);
  }

  protected animation() {
    super.animation();
    const props = this.options;
    if (props.animation === false) {
      /** 关闭动画 */
      this.pie.animate = false;
    }
  }

  protected annotation() {}

  protected parseEvents(eventParser) {
    super.parseEvents(EventParser);
  }

  private label() {
    const props = this.options;
    const labelConfig = { ...props.label } as Label;
    if (!this.showLabel()) {
      this.pie.label = false;
      return;
    }
    if (labelConfig.type === 'inner') {
      labelConfig.style = this.getInnerLabelDefaultStyle();
      // @ts-ignore
      labelConfig.labelLine = false;
    } else {
      // @ts-ignore
      labelConfig.labelLine = true;
    }
    labelConfig.style = this.adjustLabelStyle();
    let labelType = labelConfig.type;
    this.pie.label = getComponent('label', {
      plot: this,
      labelType,
      fields: props.colorField ? [props.angleField, props.colorField] : [props.angleField],
      ...labelConfig,
    });
  }

  private showLabel() {
    const props = this.options;
    return props.label && props.label.visible === true;
  }

  private getInnerLabelDefaultStyle() {
    const labelConfig = { ...this.options.label } as Label;
    const labelStyleConfig = (labelConfig.style || {}) as LooseMap;
    if (!labelStyleConfig.textAlign) {
      labelStyleConfig.textAlign = 'center';
    }
    return labelStyleConfig;
  }

  private adjustLabelStyle() {
    const props = this.options;
    const labelConfig = { ...props.label } as Label;
    const labelStyleConfig: any = labelConfig.style || {};
    const { lineWidth, lineStroke, lineHeight, fontSize } = labelStyleConfig;
    if (labelConfig.type === 'spider') {
      labelStyleConfig.lineWidth = lineWidth ? lineWidth : 0.5;
      labelStyleConfig.lineStroke = lineStroke ? lineStroke : 'rgba(0, 0, 0, 0.45)';
    }
    labelStyleConfig.fontSize = fontSize ? fontSize : 12;
    labelStyleConfig.lineHeight = lineHeight ? lineHeight : labelStyleConfig.fontSize * 1.2;
    return labelStyleConfig;
  }
}

registerPlotType('pie', PieLayer);
