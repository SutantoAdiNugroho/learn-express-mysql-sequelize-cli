const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./config");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Welcome to my api with mysql sequelize-cli" });
});

app.use("/todos", require("./routes/todos"));
app.use("/users", require("./routes/users"));

app.listen(PORT, () => {
  console.log(`On port ${PORT}`);
});
