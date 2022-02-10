const db = require("../models");

// create main model
const Product = db.products;
const Review = db.reviews;

//main workflow
const add = async (req, res) => {

  // console.log(req.body.title);
  // res.send(req.body.description);
  let info = 
  {
    title: req.body.title,
    price: req.body.price,
    descriptioon: req.body.descriptioon,
    published: req.body.published ? req.body.published : false,
  };

  console.log(info);
  const product = await Product.create(info).then(() => {
    res.status(200).send(product);
  }).catch(err => {
    res.send(err)
  })
  
};

// get all product
const getAllProducts = async (req, res) => {
  let products = await Product.findAll({});
  res.send(products);
};

// get single product from
const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// get single product from
const updateProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};
// delet by id
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
