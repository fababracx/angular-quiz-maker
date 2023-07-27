/**
 * Shuffle an array of items
 * @param items items of array
 */
export function shuffleArray<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}
