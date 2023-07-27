import { Difficulty } from '@shared/enums/difficulty';
import { DifficultiesToOptionsPipe } from './difficulties-to-options.pipe';

describe('DifficultiesToOptionsPipe', () => {
  let pipe: DifficultiesToOptionsPipe;

  beforeEach(() => {
    pipe = new DifficultiesToOptionsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty array', () => {
    expect(pipe.transform(null)).toEqual([]);
    expect(pipe.transform([])).toEqual([]);
  });

  it('should return list of options', () => {
    expect(pipe.transform(Object.values(Difficulty))).toEqual([
      { value: 'easy', text: 'easy' },
      { value: 'medium', text: 'medium' },
      { value: 'hard', text: 'hard' }
    ]);
  });
});
