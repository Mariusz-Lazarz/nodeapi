const cacheData = require("../utils/cacheData");
const countPairs = require("../utils/pairsCounter");

const getAllPairs = async (req, res) => {
  try {
    const cacheKey = "pairs";
    const url = `https://swapi.dev/api/films`;
    const data = await cacheData(cacheKey, url);
    const openings = data.results.map((film) => film.opening_crawl).join(" ");
    const countedPairs = countPairs(openings);

    res.json(countedPairs);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Fail",
      message: `Error fetching data from ${req.originalUrl}: ${error.message}`,
    });
  }
};

module.exports = { getAllPairs };
