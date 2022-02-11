const db = require("../models");

// create main model
const Product = db.products;
const Review = db.reviews;

//  1. create a new record
const add = async (req, res) => {
  // console.log("=========================");
  // console.log(req.body);
  let info = {
    title: req.body.title,
    price: req.body.price,
    descriptioon: req.body.descriptioon,
    published: req.body.published ? req.body.published : false,
  };

  // console.log(info);
  const product = await Product.create(info)
    .then(() => {
      res.status(200).send(info);
    })
    .catch((err) => {
      res.send(err);
    });
};

// 2. get info of all product
const getAllProducts = async (req, res) => {
  let products = await Product.findAll({});
  res.send(products);
};

// 3. get info of a single product
const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// 4. to update a product
const updateProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

// 5. to delete a product
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("producted deleted");
};

// get published
const getPublished = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

module.exports = {
  add,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublished,
};
