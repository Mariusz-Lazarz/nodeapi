const countPairs = (description) => {
  const pairs = {};
  const wordsArray = description.split(/\s+|\r\n/);

  for (const word of wordsArray) {
    let lowercaseWord = word.toLowerCase();
    // Ignore dots and commas at the end of the word
    lowercaseWord = lowercaseWord.replaceAll(/['.,!?]+$/g, "");
    // Ignore apostrophes
    if (lowercaseWord.endsWith("'s")) {
      lowercaseWord = lowercaseWord.slice(0, -2);
    }

    if (pairs[lowercaseWord]) {
      pairs[lowercaseWord]++;
    } else {
      pairs[lowercaseWord] = 1;
    }
  }
  
  return pairs;
};

module.exports = countPairs;
