const cacheData = require("../utils/cacheData");

exports.getAll = (resource) => async (req, res) => {
  try {
    const page = req.query.page;
    const cacheKey = `${resource}-page${page}`;
    const url = `https://swapi.dev/api/${resource}/${
      page ? `?page=${page}` : ""
    }`;

    const data = await cacheData(cacheKey, url);
    res.status(200).json(data);
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
    const cacheKey = `${resource}-id${id}`;
    const url = `https://swapi.dev/api/${resource}/${id}`;

    const data = await cacheData(cacheKey, url);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: `Error fetching data from ${req.originalUrl}: ${error.message}`,
    });
  }
};
