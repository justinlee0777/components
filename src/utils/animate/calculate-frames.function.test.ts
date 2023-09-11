import calculateFrames from './calculate-frames.function';

describe('calculateFrames()', () => {
  test('calculates the number of frames for 60fps over 300ms', () => {
    expect(calculateFrames({ msPerFrame: 1000 / 60, duration: 300 })).toEqual(
      18,
    );
  });

  test('calculates the number of frames for 30fps over 300ms', () => {
    expect(calculateFrames({ msPerFrame: 1000 / 30, duration: 300 })).toEqual(
      9,
    );
  });

  test('calculates the number of frames for 60fps over 3s', () => {
    expect(calculateFrames({ msPerFrame: 1000 / 60, duration: 3000 })).toEqual(
      180,
    );
  });
});
