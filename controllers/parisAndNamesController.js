const cacheData = require("../utils/cacheData");
const countPairs = require("../utils/pairsCounter");
const getMostFrequentCharacter = require("../utils/characterCouter");

const getAllPairsAndNames = async (req, res) => {
  try {
    const filmsCacheKey = "films";
    const peopleCacheKey = "people";
    const filmsUrl = `https://swapi.dev/api/films`;
    const peopleUrl = `https://swapi.dev/api/people`;
    const filmData = await cacheData(filmsCacheKey, filmsUrl);
    const peopleData = await cacheData(peopleCacheKey, peopleUrl, true);
    const countedPairs = countPairs(filmData);
    const mostFrequentCharacter = getMostFrequentCharacter(
      filmData,
      peopleData
    );

    res.json({ mostFrequentCharacter, countedPairs });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Fail",
      message: `Error fetching data from ${req.originalUrl}: ${error.message}`,
    });
  }
};

module.exports = { getAllPairsAndNames };
