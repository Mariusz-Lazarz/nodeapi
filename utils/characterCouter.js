const getMostFrequentCharacter = (filmData, peopleData) => {
  const openings = filmData.map((film) => film.opening_crawl);
  const characters = peopleData.map((person) => person.name);

  const characterCounts = characters.reduce((acc, character) => {
    acc[character] = openings.reduce(
      (total, opening) => total + (opening.includes(character) ? 1 : 0),
      0
    );
    return acc;
  }, {});

  let maxCount = Math.max(...Object.values(characterCounts));

  return Object.keys(characterCounts).filter(
    (character) => characterCounts[character] === maxCount
  );
};

module.exports = getMostFrequentCharacter;
