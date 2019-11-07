export const shuffleCards = array => {
  for (let i = 0; i < array.length - 1; i++) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = temp;
  }
};

export const generateCards = () => {
  const types = [
    'react',
    'redux',
    'reactu',
    'angular',
    'ruby',
    'rails',
    'vue',
    'javascript',
  ];
  let index = 0;

  const cards = types.reduce((arrOfCards, type) => {
    arrOfCards.push({ type, id: index++ });
    arrOfCards.push({ type, id: index++ });

    return arrOfCards;
  }, []);

  shuffleCards(cards);

  return cards;
};
