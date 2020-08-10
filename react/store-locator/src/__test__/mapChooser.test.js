import mapChooser from '../mapChooser';

describe('mapChooser', () => {
  it('should return an image file based on input given to it', () => {
      let expected = "portland.png";
      let actual = mapChooser("portland");
      expect(actual).toEqual(expected);
  }); // suite of tests

  it('should return none.png based when receiving invalid value', () => {
    let expected = "none.png";
    let actual = mapChooser(null);
    expect(actual).toEqual(expected);
  });
}); // spec of tests
