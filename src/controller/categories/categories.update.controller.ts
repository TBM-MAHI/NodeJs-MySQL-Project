import { Request, Response } from "express";
import type { Knex } from "knex";

export function handleCategoriesUpdate(
  req: Request,
  res: Response,
  knex: Knex
) {
  let { categoryId } = req.params;
  const { data } = req.body;
  console.log(data);
  knex("categories")
    .where({ id: categoryId })
    .update({ name: data }, ["id", "name"])
    .then((updated_data) => {
      return res.status(200).json({ message: "updated" });
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ err: `error updating data in the database \n ${err}` });
    });
}
