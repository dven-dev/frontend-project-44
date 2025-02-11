import { runGame, getRandomNumber } from '../index.js';

const description = 'What number is missing in the progression?';

const createProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 5);
  const length = getRandomNumber(5, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = createProgression(start, step, length);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const game = {
  description,
  generateRound,
};

export default () => runGame(game);
