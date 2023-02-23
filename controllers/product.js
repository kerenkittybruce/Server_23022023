// Import function from Product Model
// import {
//   getProducts,
//   getProductById,
//   insertProduct,
//   updateProductById,
//   deleteProductById,
// } from "../models/productModel.js"; // wrong syntax -- ES6
const productModel = require("../models/productModel");

// Get All Products
const showProducts = (req, res) => {
  // Request being made to the database in the server
  productModel.getProducts((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results); // Show results as a JSON response
    }
  });
};

// Get Single Product
const showProductById = (req, res) => {
  productModel.getProductById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Create New Product
const createProduct = (req, res) => {
  const data = req.body;
  productModel.insertProduct(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Update Product
const updateProduct = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  productModel.updateProductById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Product
const deleteProduct = (req, res) => {
  const id = req.params.id;
  productModel.deleteProductById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
