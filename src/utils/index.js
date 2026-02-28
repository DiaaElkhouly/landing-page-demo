/**
 * Utility functions
 */

/**
 * Format className conditionally
 * Usage: cls('base-class', condition && 'conditional-class')
 */
export function cls(...args) {
  return args.filter(Boolean).join(" ");
}

/**
 * Delay function for animations
 * @param {number} ms - milliseconds to delay
 */
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Generate unique ID
 */
export const generateId = () =>
  `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

/**
 * Check if device is mobile based on window width
 */
export const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
};
