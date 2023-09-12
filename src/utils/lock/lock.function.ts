/**
 * Ensures that the passed function is not called until its last invocation is finished.
 */
export default function lock<Return>(
  callback: (...args: Array<unknown>) => Promise<Return>,
): (...args: Array<unknown>) => Promise<Return> {
  let awaited: Promise<Return> | null;

  return async (...args) => {
    if (!awaited) {
      awaited = callback(...args);

      const result = await awaited;

      awaited = null;

      return result;
    } else {
      return awaited;
    }
  };
}
