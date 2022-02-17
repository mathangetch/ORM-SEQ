const productController = require("../controllers/productController");
const reviewController = require("../controllers/reviewController");

const router = require("express").Router();

router.post("/add", productController.add);

router.get("/allproducts", productController.getAllProducts);

router.get("/published", productController.getPublished);

router.get("/:id", productController.getOneProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

// review routes
router.post("/addr", reviewController.addReview);
router.get("/get/all", reviewController.getallA);

// product review

router.get("/productreview/:id", productController.getpreview);
router.get("/allreviews/all", productController.getallreview);

module.exports = router;
