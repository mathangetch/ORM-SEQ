const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");

const app = express();

var corsOptions = {
  orgin: "https://localhost:4041",
};

// routers

const router = require("./routes/productRouter");
app.use("/api/products", router);

//middle ware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
