import { Observable } from 'rxjs';

/**
 * Interfacte of simple store
 */
export interface StoreService<T> {
  getData$(): Observable<T>;

  get data(): T;

  hasData(): boolean;

  setData(data: T): void;

  reset(): void;
}
