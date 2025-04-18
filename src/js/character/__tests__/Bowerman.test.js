import Bowerman from '../Bowerman';

describe('Bowerman', () => {
  test('should create a Bowerman', () => {
    const bowerman = new Bowerman('Робин');
    expect(bowerman).toBeInstanceOf(Bowerman);
  });
});
