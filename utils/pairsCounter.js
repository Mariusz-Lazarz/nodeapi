const countPairs = (filmData) => {
  const openings = filmData.map((film) => film.opening_crawl).join(" ");
  const formatedOpenings = openings
    .split(/\s+|\r\n/)
    .map((word) => word.toLowerCase())
    .map((word) => word.replace(/['.,!?]+$/g, ""))
    .map((word) => (word.endsWith("'s") ? word.slice(0, -2) : word))
    .filter((word) => word.length > 0);

  return formatedOpenings.reduce((pairs, word) => {
    pairs[word] = (pairs[word] || 0) + 1;
    return pairs;
  }, {});
};

module.exports = countPairs;
