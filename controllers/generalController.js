const Cache = require("../models/cacheModel");

exports.getAll = (resource) => async (req, res) => {
  try {
    const page = req.query.page;
    const cacheKey = `${resource}-${page}`;

    let cachedData = await Cache.findOne({ key: cacheKey });
    if (cachedData && new Date() - cachedData.timestamp < 24 * 60 * 60 * 1000) {
      return res.json(cachedData.data);
    }

    const response = await fetch(
      `https://swapi.dev/api/${resource}/${page ? `?page=${page}` : ""}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (cachedData) {
      await Cache.updateOne({ key: cacheKey }, { data, timestamp: new Date() });
    } else {
      await new Cache({
        key: cacheKey,
        data,
        timestamp: new Date(),
      }).save();
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: `Error fetching data from ${req.originalUrl}: ${error.message}`,
    });
  }
};

exports.getOne = (resource) => async (req, res) => {
  try {
    const id = req.params.id;
    const cacheKey = `${resource}-${id}`;

    let cachedData = await Cache.findOne({ key: cacheKey });
    if (cachedData && new Date() - cachedData.timestamp < 24 * 60 * 60 * 1000) {
      return res.json(cachedData.data);
    }

    const response = await fetch(`https://swapi.dev/api/${resource}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (cachedData) {
      await Cache.updateOne({ key: cacheKey }, { data, timestamp: new Date() });
    } else {
      await new Cache({ key: cacheKey, data, timestamp: new Date() }).save();
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: `Error fetching data from ${req.originalUrl}: ${error.message}`,
    });
  }
};
