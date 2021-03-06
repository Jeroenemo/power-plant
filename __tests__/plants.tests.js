const { stateControl, changeState, feed, blueFood, hydrate, superWater, artificialLight, sunlight, playMusic, massage } = require('./../src/plants.js');

describe('changeState', () => {
  test('should increase property value', () => {
    let plant = {};
    expect(changeState("soil")(5)(plant)).toEqual({ soil: 5 });
  });
  test('it should increase soil by 1', () => {
    let plant = {};
    expect(feed(plant)).toEqual({ soil: 1 });
  });
  test('it should increase soil by 5', () => {
    let plant = {};
    expect(blueFood(plant)).toEqual({ soil: 5 });
  });
  test('it should increase water by 1', () => {
    let plant = {};
    expect(hydrate(plant)).toEqual({ water: 1 });
  });
  test('it should increase water by 5', () => {
    let plant = {};
    expect(superWater(plant)).toEqual({ water: 5 });
  });
  test('it should increase light by 1', () => {
    let plant = {};
    expect(artificialLight(plant)).toEqual({ light: 1 });
  });
  test('it should increase light by 5', () => {
    let plant = {}
    expect(sunlight(plant)).toEqual({ light: 5 });
  });
  test('it should increase health by 1', () => {
    let plant = {}
    expect(massage(plant)).toEqual({ health: 1 });
  });

  test('it should increase health by 5', () => {
    let plant = {}
    expect(playMusic(plant)).toEqual({ health: 5 });
  });
});

describe('stateControl', () => {

  test('should return an empty object when no argument is passed in', () => {
    expect(stateControl()).toEqual({});
  });
  
  test('should change the state when passsing in a changestate function', () => {
    const randomPlant = stateControl(blueFood);
    const randomPlantThatHasBeenMassaged = stateControl(massage);
    expect(randomPlantThatHasBeenMassaged).toEqual({soil: 5, health: 1});
  });
});
