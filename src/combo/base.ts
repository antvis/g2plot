import { clone, deepMix, each, hasKey, isString, mix, isArray } from '@antv/util';
import { getScale } from '@antv/scale';
import TextDescription from '../components/description';
import BBox from '../util/bbox';
import Layer, { LayerConfig } from '../base/layer';
import ViewLayer from '../base/view-layer';
import { isTextUsable } from '../util/common';
import ThemeController from '../base/controller/theme';
import { ComboViewConfig } from './util/interface';

const LEGEND_MARGIN = 10;

export interface IComboViewLayer extends ComboViewConfig, LayerConfig {}

export default abstract class ComboViewLayer<T extends IComboViewLayer = IComboViewLayer> extends Layer<T> {
  public static getDefaultOptions(): Partial<ComboViewConfig> {
    return {};
  }

  public initialOptions: T;
  public title: TextDescription;
  public description: TextDescription;
  public viewRange: BBox;
  public theme: any;
  public type: string;
  protected themeController: ThemeController;
  protected geomLayers: ViewLayer[] = [];
  protected colors: string[];
  protected legends: any[] = [];

  constructor(props: T) {
    super(props);
    this.options = this.getOptions(props);
    this.initialOptions = deepMix({}, this.options);
    this.themeController = new ThemeController();
  }

  public getOptions(props: Partial<T>): T {
    const curOptions = this.options || {};
    const options = super.getOptions(props);
    // @ts-ignore
    const defaultOptions = this.constructor.getDefaultOptions(props);
    return deepMix({}, options, defaultOptions, curOptions, props);
  }

  public init() {
    super.init();
    this.canvas.set('localRefresh', false);
    this.theme = this.themeController.getTheme(this.options as any, this.type);
    this.drawTitle();
    this.drawDescription();
  }

  public updateConfig(cfg: Partial<T>) {
    this.doDestroy();
    this.options = this.getOptions(cfg);
    this.processOptions(this.options);
  }

  public changeData(data) {
    if ((data && data.length < 2) || !isArray(data[0])) {
      return;
    }
    each(this.geomLayers, (layer, index) => {
      layer.changeData(data[index]);
    });
  }

  public changeDataByIndex(data, index) {
    if (isArray(data[0])) {
      return;
    }
    const geomLayer = this.geomLayers[index];
    geomLayer.changeData(data);
  }

  protected doDestroy() {
    each(this.geomLayers, (layer) => {
      layer.doDestroy();
    });
    this.geomLayers = [];
    each(this.legends, (legend) => {
      legend.destroy();
    });
    this.legends = [];
  }

  protected createLayer(LayerCtr, data, config) {
    const viewRange = this.getViewRange();
    const layer = new LayerCtr({
      canvas: this.canvas,
      container: this.container,
      x: viewRange.minX,
      y: viewRange.minY,
      width: viewRange.width,
      height: viewRange.height,
      data,
      ...config,
    });
    this.geomLayers.push(layer);
    return layer;
  }

  protected yAxis(index) {
    const { yAxis } = this.options;
    const config = index === 0 ? yAxis.leftConfig : yAxis.rightConfig;
    const colorValue = this.colors[index];
    const yAxisConfig = clone(config);
    const styleMap = {
      title: 'stroke',
      line: 'stroke',
      label: 'fill',
      tickLine: 'stroke',
    };
    if (config.visible && config.colorMapping) {
      each(yAxisConfig, (config, name) => {
        if (!isString(config) && hasKey(styleMap, name)) {
          const styleKey = styleMap[name];
          if (!config.style) {
            config.style = {};
          }
          config.style[styleKey] = colorValue;
        }
      });
    }
    return yAxisConfig;
  }

  protected getTicks() {
    const { yAxis } = this.options;
    const leftScaleData = this.getScaleData(0);
    // 取到左轴ticks数量
    const Scale = getScale('linear');
    const linearScale = new Scale(
      deepMix(
        {},
        {
          min: 0,
          max: leftScaleData.max,
          nice: true,
          values: leftScaleData.values,
        },
        {
          tickCount: yAxis.tickCount,
        }
      )
    );
    const tickCount = linearScale.ticks.length;
    // 生成右轴ticks
    const max = yAxis.max ? linearScale.max : this.getScaleData(1).max;
    const tickInterval = max / (tickCount - 1);
    const ticks = [];
    for (let i = 0; i < tickCount; i++) {
      let tickValue = i * tickInterval;
      if (!Number.isInteger(tickValue)) {
        tickValue = parseFloat(tickValue.toFixed(1));
      }
      ticks.push(tickValue);
    }
    return ticks;
  }

  protected getScaleData(index) {
    const { data, yField, yAxis } = this.options;
    const values = [];
    each(data[index], (d) => {
      values.push(d[yField[index]]);
    });
    values.sort((a, b) => a - b);
    const min = values[0];
    const max = yAxis.max ? yAxis.max : values[values.length - 1];
    return { min, max, values };
  }

  protected getDataByXField(value, index) {
    const { data, xField } = this.options;
    const dataSource = data[index];
    return dataSource.filter((d) => {
      return d[xField] === value;
    });
  }

  protected getYAxisGlobalConfig() {
    const { min, max, tickCount } = this.options.yAxis;
    return { min, max, tickCount };
  }

  protected adjustLayout() {
    const viewRange = this.getViewRange();
    const leftPadding = this.geomLayers[0].options.padding;
    const rightPadding = this.geomLayers[1].options.padding;
    // 获取legendHeight并加入上部padding
    let legendHeight = 0;
    let legendA_BBox;
    let legendB_BBox;
    if (this.options.legend?.visible) {
      legendA_BBox = this.legends[0].get('group').getBBox();
      legendB_BBox = this.legends[1].get('group').getBBox();
      legendHeight = legendA_BBox.height + LEGEND_MARGIN * 2;
    }

    // 同步左右padding
    const uniquePadding = [leftPadding[0] + legendHeight, rightPadding[1], rightPadding[2], leftPadding[3]];
    this.geomLayers[0].updateConfig({
      padding: uniquePadding,
    });
    this.geomLayers[0].render();
    this.geomLayers[1].updateConfig({
      padding: uniquePadding,
    });
    this.geomLayers[1].render();
    // 更新legend的位置
    if (this.options.legend?.visible) {
      this.legends[0].setLocation({
        x: leftPadding[3] - legendA_BBox.width / 2,
        y: viewRange.minY + LEGEND_MARGIN,
      });
      this.legends[1].setLocation({
        x: viewRange.maxX - rightPadding[1] - legendB_BBox.width / 2,
        y: viewRange.minY + LEGEND_MARGIN,
      });
    }
  }

  protected legendFilter(index) {
    const legend = this.legends[index];
    const legend_group = legend.get('group');
    legend_group.on('click', () => {
      const item = legend.get('items')[0];
      if (!item.unchecked) {
        legend.setItemState(item, 'unchecked', true);
        this.hideLayer(index);
      } else {
        legend.setItemState(item, 'unchecked', false);
        this.showLayer(index);
      }
    });
  }

  protected hideLayer(index) {
    const layer = this.geomLayers[index];
    const field = this.options.yField[index];
    // 隐藏layer时只隐藏yAxis和geometry
    const { view } = layer;
    const axisContainer = this.getYAxisContainer(view, field);
    if (axisContainer) {
      axisContainer.set('visible', false);
    }
    this.setGeometryVisibility(view, false);
    this.canvas.draw();
  }

  protected showLayer(index) {
    const layer = this.geomLayers[index];
    const field = this.options.yField[index];
    const { view } = layer;
    const axisContainer = this.getYAxisContainer(view, field);
    if (axisContainer) {
      axisContainer.set('visible', true);
    }
    this.setGeometryVisibility(view, true);
    this.canvas.draw();
  }

  protected setGeometryVisibility(view, show) {
    each(view.geometries, (geom) => {
      const { container, labelsContainer } = geom;
      if (container) {
        container.set('visible', show);
      }
      if (labelsContainer) {
        labelsContainer.set('visible', show);
      }
    });
  }

  protected getYAxisContainer(view, field) {
    let container;
    const axisCtr = view.controllers.filter((ctr) => {
      return hasKey(ctr, 'axisContainer');
    })[0];
    if (axisCtr) {
      const ctr = axisCtr as any;
      const axisGroups = ctr.axisContainer.get('children');
      each(axisGroups, (g) => {
        const axisField = g.get('component').get('field');
        if (axisField === field) {
          container = g;
        }
      });
    }
    return container;
  }

  protected drawTitle(): void {
    const props = this.options;
    const range = this.layerBBox;
    if (this.title) {
      this.title.destroy();
      this.title = null;
    }

    if (isTextUsable(props.title)) {
      const width = this.width;
      const theme = this.theme;
      const title = new TextDescription({
        leftMargin: range.minX + theme.title.padding[3],
        rightMargin: range.maxX - theme.title.padding[1],
        topMargin: range.minY + theme.title.padding[0],
        text: props.title.text,
        style: mix(theme.title, props.title.style),
        wrapperWidth: width - theme.title.padding[3] - theme.title.padding[1],
        container: this.container.addGroup() as any,
        theme,
        index: isTextUsable(props.description) ? 0 : 1,
        plot: this as any,
        alignTo: props.title.alignTo,
        name: 'title',
      });
      this.title = title;
    }
  }

  protected drawDescription(): void {
    const props = this.options;
    const range = this.layerBBox;
    if (this.description) {
      this.description.destroy();
      this.description = null;
    }

    if (isTextUsable(props.description)) {
      const width = this.width;
      const theme = this.theme;
      let topMargin = 0;

      if (this.title) {
        const titleBBox = this.title.getBBox();
        topMargin += titleBBox.minY + titleBBox.height;
        topMargin += theme.description.padding[0];
      } else {
        // 无title的情况下使用title的上padding
        topMargin += range.minY + theme.title.padding[0];
      }

      const description = new TextDescription({
        leftMargin: range.minX + theme.description.padding[3],
        topMargin,
        rightMargin: range.maxX - theme.title.padding[1],
        text: props.description.text,
        style: mix(theme.description, props.description.style),
        wrapperWidth: width - theme.description.padding[3] - theme.description.padding[1],
        container: this.container.addGroup() as any,
        theme,
        index: 1,
        plot: this as any,
        alignTo: props.description.alignTo,
        name: 'description',
      });
      this.description = description;
    }
  }

  protected getViewRange() {
    if (!this.layerBBox) {
      this.layerBBox = new BBox(this.x, this.y, this.width, this.height);
    }
    let viewMinX = this.layerBBox.minX;
    let viewMaxX = this.layerBBox.maxX;
    let viewMinY = this.layerBBox.minY;
    let viewMaxY = this.layerBBox.maxY;
    const components = [this.title, this.description];

    each(components, (component) => {
      if (component) {
        const { position } = component;
        const { minX, maxX, minY, maxY } = component.getBBox();
        if (maxY >= viewMinY && maxY <= viewMaxY && position === 'top') {
          viewMinY = maxY;
        }
        if (minY >= viewMinY && minY <= viewMaxY && position === 'bottom') {
          viewMaxY = minY;
        }
        if (maxX > viewMinX && maxX <= viewMaxX && position === 'left') {
          viewMinX = maxX;
        }
        if (minX >= viewMinX && maxX <= viewMaxX && position === 'right') {
          viewMaxX = minX;
        }
      }
    });
    return new BBox(viewMinX, viewMinY, viewMaxX - viewMinX, viewMaxY - viewMinY);
  }
}
