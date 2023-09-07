import debounce from './debounce.function';

describe('debounce()', () => {
  jest.useFakeTimers();

  test('exeutes the callback after 300 milliseconds', () => {
    const callback = jest.fn();
    const debounceCallback = debounce(callback, 300);

    debounceCallback();

    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(300);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('does not execute the callback before 300 milliseconds regardless of how often it is called', () => {
    const callback = jest.fn();
    const debounceCallback = debounce(callback, 300);

    debounceCallback();

    debounceCallback();

    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    debounceCallback();

    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    debounceCallback();

    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(300);

    expect(callback).toHaveBeenCalledTimes(1);

    debounceCallback();

    debounceCallback();

    debounceCallback();

    jest.advanceTimersByTime(300);

    expect(callback).toHaveBeenCalledTimes(2);
  });
});
