/**
 * Ensures that the passed function is not called until its last invocation is finished.
 */
export default function lock<Return>(
  callback: () => Promise<Return>,
): () => Promise<Return> {
  let awaited: Promise<Return> | null;

  return async () => {
    if (!awaited) {
      awaited = callback();

      const result = await awaited;

      awaited = null;

      return result;
    } else {
      return awaited;
    }
  };
}
