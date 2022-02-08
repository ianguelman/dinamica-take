const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

const routes = require("./src/routes/petshop");

app.use("/", routes);

app.use(cors());

app.listen(3000, () => {
  console.log("Servidor On na porta 3000!");
});
