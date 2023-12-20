const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

// connecting to mongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://iluu0456:test1234@cluster0.uqvw237.mongodb.net/nodeapi"
    );
    console.log(`DB is connected`);
  } catch (error) {
    console.error(`Error connecting to the database: ${error}`);
  }
}

connectToDatabase();

app.listen(port, () => {
  console.log(
    `App running at port ${port} \nAPI docs are avaliable here http://localhost:3000/api-docs/`
  );
});
