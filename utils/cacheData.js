const Cache = require("../models/cacheModel");

const cacheData = async (cacheKey, url, getAllData = false) => {
  try {
    let cachedData = await Cache.findOne({ key: cacheKey });
    if (cachedData && new Date() - cachedData.timestamp < 24 * 60 * 60 * 1000) {
      return cachedData.data;
    }

    let data = [];
    let nextUrl = url;

    const fetchData = async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    };

    if (getAllData) {
      while (nextUrl) {
        const pageData = await fetchData(nextUrl);
        data = data.concat(pageData.results);
        nextUrl = pageData.next;
      }
    } else {
      const pageData = await fetchData(url);
      data = pageData;
    }

    if (cachedData) {
      await Cache.updateOne(
        { key: cacheKey },
        { data: data, timestamp: new Date() }
      );
    } else {
      await new Cache({
        key: cacheKey,
        data: data,
        timestamp: new Date(),
      }).save();
    }

    return data;
  } catch (error) {
    console.error(`Error in cacheData: ${error}`);
    throw error;
  }
};

module.exports = cacheData;
