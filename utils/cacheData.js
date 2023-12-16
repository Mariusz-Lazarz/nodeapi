const Cache = require("../models/cacheModel");

const cacheData = async (cacheKey, url) => {
  try {
    let cachedData = await Cache.findOne({ key: cacheKey });
    if (cachedData && new Date() - cachedData.timestamp < 24 * 60 * 60 * 1000) {
      return cachedData.data;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (cachedData) {
      await Cache.updateOne({ key: cacheKey }, { data, timestamp: new Date() });
    } else {
      await new Cache({ key: cacheKey, data, timestamp: new Date() }).save();
    }

    return data;
  } catch (error) {
    console.error(`Error in cacheData: ${error}`);
    throw error;
  }
};

module.exports = cacheData;
