import express from "express";
let db_connect = require("../knexfile");
let knex = require("knex")(db_connect);
let productRouter = express.Router();

import { handleProductCreate } from "../controller/product/product.create.controller";
import { handleProductRead } from "../controller/product/product.read.controller";
import { handleProductDelete } from "../controller/product/product.delete.controller";
import { handleProductUpdate } from "../controller/product/product.update.controller";
import { handleProduct_and_categoryCreate } from "../controller/product_category/product-category.create.controller";
productRouter.use((req, res, next) => next());

productRouter.post("/", (req, res) => {
  handleProductCreate(req, res, knex);
});
productRouter.get("/:productId", (req, res) => {
  handleProductRead(req, res, knex);
});
productRouter.put("/:productId", (req, res) => {
  handleProductUpdate(req, res, knex);
});
productRouter.delete("/:productId", (req, res) => {
  handleProductDelete(req, res, knex);
});

productRouter.post("/product_category/:categoryId/:productId", (req, res) => {
  handleProduct_and_categoryCreate(req, res, knex);
});

export default productRouter;