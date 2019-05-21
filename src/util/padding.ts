import { View } from '@antv/g2';
import { Element } from '@antv/g';
import * as _ from '@antv/util';

interface DataPointType {
  [ k: string ]: any;
}

const DEFAULT_PADDING = [ 20, 20, 40, 20 ];

export default function getAutoPadding(view: View, components) {
  const width = view.get('width');
  const height = view.get('height');
    /** 参与auto padding的components: axis annotation legend*/
  const components_bbox = [ view.get('panelRange') ];
  getAxis(view, components_bbox);
  getLegend(view, components_bbox);
  /**参与auto padding的自定义组件 */
  _.each(components, (obj) => {
    const component = obj as Element;
    const bbox = component.getBBox();
    components_bbox.push(bbox);
  });
  const box = mergeBBox(components_bbox, width, height);
  const padding = [
    0 - box.minY + DEFAULT_PADDING[0], // 上面超出的部分
    box.maxX - view.get('width') + DEFAULT_PADDING[1], // 右边超出的部分
    box.maxY - view.get('height') + DEFAULT_PADDING[2], // 下边超出的部分
    0 - box.minX + DEFAULT_PADDING[3],
  ];
  return padding;
}

function getAxis(view, bboxes) {
  const axes = view.get('axisController').axes;
  if (axes.length > 0) {
    _.each(axes, (a) => {
      const axis = a as DataPointType;
      const bbox = axis.get('group').getBBox();
      bboxes.push(bbox);
    });
  }
}

function getLegend(view, bboxes) {
  const legends = view.get('legendController').legends;
  if (legends.length > 0) {
    _.each(legends, (l) => {
      const  legend = l as DataPointType;
      const bbox = legend.get('container').getBBox();
      bboxes.push(bbox);
    });
  }
}

function mergeBBox(bboxes, width, height) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = - Infinity;
  _.each(bboxes, (bbox) => {
    const box = bbox as DataPointType;
    minX = Math.min(box.minX, minX);
    maxX = Math.max(box.maxX, maxX);
    minY = Math.min(box.minY, minY);
    maxY = Math.max(box.maxY, maxY);
  });
  /*if (Math.abs(minX) > width / 2) minX = 0;
  if (Math.abs(maxX) < width / 2) maxX = width;
  if (Math.abs(minY) > height / 2) minY = 0;
  if (Math.abs(maxY) < height / 2) maxY = height;*/
  return { minX, maxX, minY, maxY };
}
