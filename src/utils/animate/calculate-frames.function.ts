import AnimateOptions from './animate-options.interface';

/**
 * Calculates the number of frames needed to render an animation based on frame rate and duration (in milliseconds).
 * Useful for calculating the change over time.
 */
export default function calculateFrames(options?: AnimateOptions): number {
  const msPerFrame = options?.msPerFrame ?? 1000 / 60;
  /* In milliseconds. */
  const duration = options?.duration ?? 300;
  return duration / msPerFrame;
}
