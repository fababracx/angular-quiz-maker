import { shuffleArray } from './array.helpers';

describe('shuffledArray', () => {
  it('should return empty array', () => {
    const startArray: string[] = [];
    expect(shuffleArray<string>(startArray)).toEqual(startArray);
  });

  // xit because it's random test
  xit('should return shuffled array', () => {
    // Cas 1 element
    let startArray = ['toto'];
    expect(shuffleArray<string>(startArray)).toEqual(startArray);
    // Cas 2 elements
    startArray = ['toto', 'titi'];
    expect(shuffleArray<string>(startArray)).not.toEqual(startArray);
    // Cas 3 elements
    startArray = ['test', 'toto', 'titi'];
    expect(shuffleArray<string>(startArray)).not.toEqual(startArray);
    // Cas 4 elements
    startArray = ['test', 'toto', 'titi', 'tata'];
    expect(shuffleArray<string>(startArray)).not.toEqual(startArray);
  });

  // xit because it's random test
  xit('should return a different shuffle array', () => {
    // Cas 1 element
    let startArray = ['test'];
    let shuffledArray = shuffleArray<string>(startArray);
    expect(shuffledArray).toEqual(startArray);
    expect(shuffleArray<string>(startArray)).toEqual(shuffledArray);
    // Cas 2 elements
    startArray = ['test', 'toto'];
    shuffledArray = shuffleArray<string>(startArray);
    expect(shuffledArray).not.toEqual(startArray);
    expect(shuffleArray<string>(startArray)).not.toEqual(shuffledArray);
    // Cas 3 elements
    startArray = ['test', 'toto', 'titi'];
    shuffledArray = shuffleArray<string>(startArray);
    expect(shuffledArray).not.toEqual(startArray);
    expect(shuffleArray<string>(startArray)).not.toEqual(shuffledArray);
    // Cas 4 elements
    startArray = ['test', 'toto', 'titi', 'tata'];
    shuffledArray = shuffleArray<string>(startArray);
    expect(shuffledArray).not.toEqual(startArray);
    expect(shuffleArray<string>(startArray)).not.toEqual(shuffledArray);
  });
});
