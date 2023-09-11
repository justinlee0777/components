interface KeyCodesFunctionMap {
  [code: KeyboardEvent['code']]: EventListenerOrEventListenerObject;
}

/**
 * Helper function that creates a keyboard event listener based on a map of keyboard codes to callbacks.
 * This is just a sugar over reading the KeyEvent and doing some action based on the key code.
 *
 * @param map of keyboard codes to a function.
 * @returns an event listener usable for 'keydown', 'keyup', etc.
 */
export default function createKeyListener(
  map: KeyCodesFunctionMap,
): EventListenerOrEventListenerObject {
  return (event: KeyboardEvent) => {
    const keyCode = event.code;

    Object.entries(map).forEach(([matchingCode, callback]) => {
      if (keyCode === matchingCode) {
        typeof callback === 'object'
          ? callback.handleEvent(event)
          : callback(event);
      }
    });
  };
}
