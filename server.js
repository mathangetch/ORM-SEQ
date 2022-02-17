const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
  orgin: "https://localhost:4041",
};

//middle ware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers

const router = require("./routes/productRouter");
app.use("/api/products", router);

//testing api
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

//port decleration
const PORT = process.env.PORT || 4040;

// server
app.listen(PORT, () => {
  console.log("listening on port");
});
