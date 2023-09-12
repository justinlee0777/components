import AnimateOptions from './animate-options.interface';
import animate from './animate.function';
import calculateFrames from './calculate-frames.function';

describe('animate()', () => {
  jest.useFakeTimers();

  test('applies an incremental change', () => {
    let i = 0;

    const callback = jest.fn().mockImplementation(() => i++);

    const msPerFrame = 1000 / 60;

    animate(callback, {
      msPerFrame,
      duration: 300,
    });

    jest.advanceTimersByTime(msPerFrame);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(i).toEqual(1);

    jest.advanceTimersByTime(msPerFrame);

    expect(callback).toHaveBeenCalledTimes(2);
    expect(i).toEqual(2);

    jest.advanceTimersByTime(msPerFrame * 10);

    expect(callback).toHaveBeenCalledTimes(12);
    expect(i).toEqual(12);

    jest.advanceTimersByTime(300);

    expect(callback).toHaveBeenCalledTimes(18);
    expect(i).toEqual(18);
  });

  test('applies an incremental change calculated using calculateFrames()', () => {
    const distance = 100;

    const options: AnimateOptions = {
      msPerFrame: 1000 / 60,
      duration: 300,
    };

    const frames = calculateFrames(options);
    const distancePerFrame = distance / frames;

    let i = 0;

    const callback = () => (i += distancePerFrame);

    animate(callback, options);

    jest.advanceTimersByTime(300);

    expect(i).toBeCloseTo(100);
  });
});
