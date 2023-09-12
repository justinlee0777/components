import lock from './lock.function';

describe('lock()', () => {
  test('ensures the passed callback is not invoked until its last invocation finishes', async () => {
    let resolve;

    const callback = jest
      .fn()
      .mockImplementation(() => new Promise((r) => (resolve = r)));

    const lockedCallback = lock(callback);

    let promise = lockedCallback();

    expect(callback).toHaveBeenCalledTimes(1);

    lockedCallback();

    lockedCallback();

    lockedCallback();

    expect(callback).toHaveBeenCalledTimes(1);

    resolve('foo');

    let result = await promise;

    expect(result).toBe('foo');

    promise = lockedCallback();

    expect(callback).toHaveBeenCalledTimes(2);

    lockedCallback();

    expect(callback).toHaveBeenCalledTimes(2);

    resolve('bar');

    result = await promise;

    expect(result).toBe('bar');
  });
});
