const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

// connecting to mongoDB


connectToDatabase();

app.listen(port, () => {
  console.log(
    `App running at port ${port} \nAPI docs are avaliable here http://localhost:3000/api-docs/`
  );
});
