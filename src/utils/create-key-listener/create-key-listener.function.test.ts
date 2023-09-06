import createKeydownListener from './create-key-listener.function';

describe('createKeydownListener', () => {
  test('creates listeners for WASD', () => {
    const element = document.createElement('div');

    const codes = [];
    const spy = jest.fn().mockImplementation((event) => codes.push(event.code));

    const listener = createKeydownListener({
      KeyW: spy,
      KeyA: spy,
      KeyS: spy,
      KeyD: spy,
    });

    element.addEventListener('keydown', listener);

    element.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW' }));

    expect(spy).toHaveBeenCalledTimes(1);
    expect(codes.at(-1)).toBe('KeyW');

    element.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyB' }));

    expect(spy).toHaveBeenCalledTimes(1);
    expect(codes.includes('KeyB')).toBe(false);

    element.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyD' }));

    expect(spy).toHaveBeenCalledTimes(2);
    expect(codes.at(-1)).toBe('KeyD');

    element.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyS' }));
    element.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyA' }));

    expect(spy).toHaveBeenCalledTimes(4);
    expect(codes).toEqual(['KeyW', 'KeyD', 'KeyS', 'KeyA']);

    element.removeEventListener('keydown', listener);
  });
});
