import { CategoriesToOptionsPipe } from './categories-to-options.pipe';

describe('CategoriesToOptionsPipe', () => {
  let pipe: CategoriesToOptionsPipe;

  beforeEach(() => {
    pipe = new CategoriesToOptionsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty array', () => {
    expect(pipe.transform(null)).toEqual([]);
    expect(pipe.transform([])).toEqual([]);
  });

  it('should return list of options', () => {
    expect(
      pipe.transform([
        {
          id: 9,
          name: 'General Knowledge'
        },
        {
          id: 10,
          name: 'Entertainment: Books'
        }
      ])
    ).toEqual([
      { value: '9', text: 'General Knowledge' },
      { value: '10', text: 'Entertainment: Books' }
    ]);
  });
});
