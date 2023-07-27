import { TrackByFunction } from '@angular/core';

/**
 * Track By function for object with number type
 * @param index index
 * @param item item to track
 */
export function trackByFnObjectNumber<T extends { id: number }>(field: keyof T): TrackByFunction<T> {
  return (index: number, item: T): number => {
    return item?.[field] ?? index;
  };
}

/**
 * Track By function for object with string type
 * @param index index
 * @param item item to track
 */
export function trackByFnObjectString<T>(field: keyof T): TrackByFunction<T> {
  return (index: number, item: T): string => {
    return `${item?.[field]}` || `${index}`;
  };
}

/**
 * Track By function for string type
 * @param index index
 * @param item item to track
 */
export function trackByFnString(index: number, item: string): string {
  return item || `${index}`;
}
