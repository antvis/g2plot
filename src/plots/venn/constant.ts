import { VennOptions } from './types';

// 一些字段常量定义，需要在文档初告知用户
export const ID_FIELD = 'id';
export const SETS_FIELD = 'sets';
export const SIZE_FIELD = 'size';
export const PATH_FIELD = 'path';

/**
 * 韦恩图 默认配置项
 */
export const DEFAULT_OPTIONS: Partial<VennOptions> = {
  blendMode: 'multiply',
  tooltip: {
    showMarkers: false,
  },
  // 默认不开启 图例筛选交互
  interactions: [
    { type: 'legend-filter', enable: false },
    // hover 激活的时候，元素的层级展示不太好 先移除该交互
    { type: 'legend-highlight', enable: false },
    { type: 'legend-active', enable: false },
  ],
};
