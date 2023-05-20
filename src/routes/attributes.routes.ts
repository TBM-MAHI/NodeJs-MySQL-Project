import express from "express";
let db_connect = require("../knexfile");
let knex = require("knex")(db_connect);
let attributesRouter = express.Router();

import { handleAttributeUpdate } from "../controller/attribute/attribute.update.controller";
import { handleAttributeRead } from "../controller/attribute/attribute.read.controller";
import { handleAttributeCreate } from "../controller/attribute/attribute.create.controller";
import { handleAttributeDelete } from "../controller/attribute/attribute.delete.controller";

attributesRouter.use( (req,res,next)=> next());

attributesRouter.post("/", (req, res) => {
  handleAttributeCreate(req, res, knex);
});
attributesRouter.get("/:attributeId", (req, res) => {
  handleAttributeRead(req, res, knex);
});
attributesRouter.put("/:attributeId", (req, res) => {
  handleAttributeUpdate(req, res, knex);
});
attributesRouter.delete("/:attributeId", (req, res) => {
  handleAttributeDelete(req, res, knex);
});

export default attributesRouter;