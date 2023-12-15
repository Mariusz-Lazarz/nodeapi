exports.getAll = (Model, resource) => async (req, res) => {
  try {
    const page = req.query.page;
    const response = await fetch(
      `https://swapi.dev/api/${resource}/${page ? `?page=${page}` : ""}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({
      status: "Fail",
      message: `Error fetching data from ${req.originalUrl}: ${error.message}`,
    });
  }
};

exports.getOne = (Model, resource) => async (req, res) => {
  try {
    const id = req.params.id;
    const response = await fetch(`https://swapi.dev/api/${resource}/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({
      status: "Fail",
      message: `Error fetching data from ${req.originalUrl}: ${error.message}`,
    });
  }
};
