import AnimateOptions from './animate-options.interface';
import animate from './animate.function';
import calculateFrames from './calculate-frames.function';

describe('animate()', () => {
  test('applies an incremental change', async () => {
    let i = 0;

    const callback = jest.fn().mockImplementation(() => i++);

    await animate(callback, {
      msPerFrame: 1000 / 60,
      duration: 300,
    });

    expect(callback).toHaveBeenCalledTimes(18);
    expect(i).toEqual(18);
  });

  test('applies an incremental change calculated using calculateFrames()', async () => {
    const distance = 100;

    const options: AnimateOptions = {
      msPerFrame: 1000 / 60,
      duration: 300,
    };

    const frames = calculateFrames(options);
    const distancePerFrame = distance / frames;

    let i = 0;

    const callback = () => (i += distancePerFrame);

    await animate(callback, options);

    expect(i).toBeCloseTo(100);
  });
});
