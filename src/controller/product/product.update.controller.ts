import { Request, Response } from "express";
import type { Knex } from "knex";

export function handleProductUpdate(req: Request, res: Response, knex: Knex) {
  let { productId } = req.params;
  const { data } = req.body;
  try {
    knex("products")
      .where({ id: productId })
      .update({ name: data }, ["id", "name"])
      .then((updated_data) => {
        return res.status(200).json({ message: "updated" });
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ err: `error updating data in the database \n ${err}` });
      });
  } catch (error) {
    console.log("error connecting to db!");
  }
}
