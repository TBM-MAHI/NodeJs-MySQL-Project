import express from "express";
let db_connect = require("../knexfile");
let knex = require("knex")(db_connect);
let productAttributeRouter = express.Router();

import { handleProduct_AttributeCreate } from "../controller/product-attribute/product-attribute.create.controller";

productAttributeRouter.post("/:attributeId/:productId", (req, res) => {
  handleProduct_AttributeCreate(req, res, knex);
});

export default productAttributeRouter;