import { trackByFnObjectNumber, trackByFnObjectString, trackByFnString } from './object.helper';

describe('trackByFnObjectNumber', () => {
  it('should return index field', () => {
    expect(trackByFnObjectNumber<{ id: number; value: string }>('id')(1, { id: 0, value: 'test' })).toEqual(0);
    // expect(trackByFnObjectNumber<{ id: number; value: string }>('id')(0, { id: null, value: 'test' })).toEqual(0);
  });
  it('should return object id field', () => {
    expect(trackByFnObjectNumber<{ id: number; value: string }>('id')(0, { id: 1, value: 'test' })).toEqual(1);
    expect(trackByFnObjectNumber<{ id: number; value: string }>('id')(0, { id: 2, value: 'test' })).toEqual(2);
  });
});

describe('trackByFnObjectString', () => {
  it('should return index field', () => {
    expect(trackByFnObjectString<{ id: string; value: string }>('id')(0, { id: '', value: 'test' })).toEqual('0');
  });
  it('should return object id field', () => {
    expect(trackByFnObjectString<{ id: string; value: string }>('id')(0, { id: 'testId', value: 'test' })).toEqual('testId');
  });
});

describe('trackByFnString', () => {
  it('should return string field', () => {
    expect(trackByFnString(0, '')).toEqual('0');
  });
  it('should return string field', () => {
    expect(trackByFnString(0, 'test')).toEqual('test');
    expect(trackByFnString(0, 'test')).toEqual('test');
  });
});
