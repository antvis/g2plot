import { V } from '../../../src';
import { createDiv } from '../../utils/dom';
import { partySupport } from '../../data/party-support';
import { adaptor, defaultOptions, StepLineOption } from './step-line';

describe('plugin - V', () => {
  it('StepLine', () => {
    const plot = new V<StepLineOption>(
      createDiv(),
      {
        width: 400,
        height: 300,
        appendPadding: 10,
        data: partySupport.filter((o) => o.type === 'FF'),
        xField: 'date',
        yField: 'value',
      },
      adaptor,
      defaultOptions
    );

    plot.render();

    expect(plot.type).toBe('g2-plot');
    expect(plot.options.stepType).toBe('vh');
    expect(plot.chart.geometries[0].type).toBe('line');
  });
});
