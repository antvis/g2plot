import { LinePatternCfg } from '../../types/pattern';
import { deepAssign } from '../../utils';
import { drawRect } from './dot';

function drawLine(options: LinePatternCfg, canvas: HTMLCanvasElement, d: string) {
  const { stroke, lineWidth, strokeOpacity } = options;
  const path = new Path2D(d);
  const ctx = canvas.getContext('2d');

  ctx.globalAlpha = strokeOpacity;
  ctx.lineCap = 'square';
  ctx.strokeStyle = stroke;
  ctx.lineWidth = lineWidth;
  ctx.stroke(path);
}

export function createLinePattern(cfg: LinePatternCfg): CanvasPattern {
  const lineCfg = deepAssign(
    {},
    {
      rotation: 45,
      spacing: 10,
      opacity: 1,
      backgroundColor: 'transparent',
      strokeOpacity: 1,
      stroke: '#FFF',
      lineWidth: 1,
    },
    cfg
  );

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const { spacing } = lineCfg;
  const rotation = lineCfg.rotation % 360;
  const radians = rotation * (Math.PI / 180);
  // w, h 画布宽高
  let w = Math.floor(Math.abs(spacing / Math.sin(radians)));
  let h = Math.floor(Math.abs(spacing / Math.sin(Math.PI / 2 - radians)));

  // 画布大小遇到特殊角度，特殊处理
  if (Math.abs(rotation) === 90 || Math.abs(rotation) === 0) {
    (w = spacing), (h = spacing);
  }

  let d;
  // 遇到特殊角度，绘线方向特殊处理
  if (Math.abs(rotation) === 90 || Math.abs(rotation) === 270) {
    d = `
    M 0 0 L 0 ${h}
    M ${w} 0 L ${w} ${h}
    `;
  } else if (Math.abs(rotation) === 0 || Math.abs(rotation) === 180) {
    d = `
    M 0 0 L ${w} 0
    M 0 ${h} L ${w} ${h}
    `;
  } else {
    // 角度（包含正负）在第二、四象限时，直线斜向下， 在一、三象限时，直线斜向上
    if (
      (0 < rotation && rotation < 90) ||
      (180 < rotation && rotation < 270) ||
      (-180 < rotation && rotation < -90) ||
      (-360 < rotation && rotation < -270)
    ) {
      d = `
      M 0 0 L ${w} ${h}
      M ${w / 2} ${-h / 2} L ${w + w / 2} ${h - h / 2}
      M ${-w / 2} ${h / 2} L ${w - w / 2} ${h + h / 2}
      `;
    } else if (
      (90 < rotation && rotation < 180) ||
      (270 < rotation && rotation < 360) ||
      (-90 < rotation && rotation < 0) ||
      (-270 < rotation && rotation < -180)
    ) {
      d = `
      M 0 ${h} L ${w} 0
      M ${w / 2} ${h + h / 2} L ${w + w / 2} ${h / 2}
      M ${-w / 2} ${h - h / 2} L ${w - w / 2} ${-h / 2}
      `;
    }
  }

  drawRect(lineCfg, canvas, w, h);
  drawLine(lineCfg, canvas, d);

  return ctx.createPattern(canvas, cfg.mode || 'repeat');
}
