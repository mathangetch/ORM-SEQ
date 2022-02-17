const db = require("../models");

const Review = db.reviews;

// to add a review
const addReview = async (req, res) => {
  let id = req.params.id;
  let data = {
    product_id: id,
    rating: req.body.rating,
    descriptioon: req.body.descriptioon,
  };

  const rview = await Review.create(data);
  res.status(200).send(rview);
};

const getallA = async (req, res) => {
  console.log("testing get all");
  let xyz = await Review.findAll({});
  
  res.send(xyz);
};

module.exports = {
  addReview,
  getallA,
};
