import express from "express";
let db_connect = require("../knexfile");
let knex = require("knex")(db_connect);
let categoriesRouter = express.Router();

import { handleCategoriesCreate } from "../controller/categories/categories.create.controller";
import { handleCategoriesDelete } from "../controller/categories/categories.delete.controller";
import { handleCategoriesRead } from "../controller/categories/categories.read.controller";
import { handleCategoriesUpdate } from "../controller/categories/categories.update.controller";
categoriesRouter.use((req, res, next) => next());

categoriesRouter.post("/", (req, res) => {
  handleCategoriesCreate(req, res, knex);
});
categoriesRouter.get("/:categoryId", (req, res) => {
  handleCategoriesRead(req, res, knex);
});
categoriesRouter.put("/:categoryId", (req, res) => {
  handleCategoriesUpdate(req, res, knex);
});
categoriesRouter.delete("/:categoryId", (req, res) => {
  handleCategoriesDelete(req, res, knex);
});

export default categoriesRouter;
