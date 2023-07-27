import { Observable } from 'rxjs';

/**
 * Interfacte of list store
 */
export interface ListStoreService<T> {
  getData$(): Observable<T[]>;

  get data(): T[];

  hasData(): boolean;

  setData(data: T[]): void;

  addData(item: T): void;

  removeData(item: T): void;

  reset(): void;
}
