import readlineSync from 'readline-sync';

const roundsCount = 3;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(game.description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = game.generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export { runGame, getRandomNumber };
