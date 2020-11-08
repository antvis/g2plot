import { Action } from '@antv/g2/lib/interaction';
import { ComponentOption } from '@antv/g2/lib/interface';
import { each, get } from '@antv/util';
import { generateStatisticStyle } from '../utils';

/**
 * Pie 中心文本事件的 Action
 */
export class StatisticAction extends Action {
  private initialAnnotation;

  private getAnnotations() {
    const view = this.context.view;
    // @ts-ignore
    return view.getController('annotation').option;
  }

  private getInitialAnnotation(): ComponentOption[] | null {
    return this.initialAnnotation;
  }

  init() {
    const { view } = this.context;
    view.removeInteraction('tooltip');
  }

  public change() {
    const { view, event } = this.context;
    const annotations = this.getAnnotations();
    if (!this.initialAnnotation) {
      this.initialAnnotation = annotations;
    }

    const { data } = event.data;
    if (data) {
      const annotationController = view.getController('annotation');
      annotationController.clear(true);
      // @ts-ignore
      const [, angleField, colorField] = view.getScaleFields();
      const angleScale = view.getScaleByField(angleField);
      const colorScale = view.getScaleByField(colorField);

      const annotationOptions = annotations.filter((a) => get(a, 'key') !== 'statistic');
      const statisticOptions = annotations.filter((a) => get(a, 'key') === 'statistic');

      each(statisticOptions, (option, idx) => {
        let value;
        if (idx === 0) {
          // title
          value = colorScale ? colorScale.getText(data[colorField]) : null;
        } else {
          value = angleScale ? angleScale.getText(data[angleField]) : data[angleField];
        }

        annotationOptions.push({
          ...option,
          html: (container, view) => {
            const width = view?.geometries[0]?.coordinate?.getRadius() || 0;
            let topText = option.formatter ? option.formatter(data, view.getData()) : '总计';
            return `<div style="${generateStatisticStyle(width, option.style)}">${topText}</div>`;
          },
        });
      });
      annotationOptions.forEach((opt) => {
        annotationController.annotation(opt);
      });
      view.render(true);
    }
  }

  public reset() {
    const { view } = this.context;
    const annotationController = view.getController('annotation');
    annotationController.clear(true);
    const initialStatistic = this.getInitialAnnotation();
    each(initialStatistic, (a) => {
      view.annotation()[a.type](a);
    });
    view.render(true);
  }
}
