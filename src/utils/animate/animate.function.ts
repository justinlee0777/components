import AnimateOptions from './animate-options.interface';

/**
 * Animate a specific change over time in the proper frame rate.
 */
export default function animate(change: () => void, options?: AnimateOptions) {
  const msPerFrame = options?.msPerFrame ?? 1000 / 60;
  /* In milliseconds. */
  const duration = options?.duration ?? 300;
  const frames = duration / msPerFrame;

  let i = 1;

  return new Promise<void>((resolve) => {
    const setIntervalId = setInterval(() => {
      if (i >= frames) {
        clearInterval(setIntervalId);

        resolve();
      }

      change();

      i = i + 1;
    }, msPerFrame);
  });
}
