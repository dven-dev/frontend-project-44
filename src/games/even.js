import { runGame, getRandomNumber } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const game = {
  description,
  generateRound,
};

export default () => runGame(game);
