import { Request, Response } from "express";
import type { Knex } from "knex";

export function handleProduct_and_categoryCreate(req: Request, res: Response, knex: Knex) {
  let { categoryId,productId } = req.params;
  if (!categoryId || !productId)
    return res.status(400).json({ message: "Input fields Empty!" });
  try {
    knex.transaction(function (trx) {
      trx
        .insert({ productId, categoryId })
        .into("category_product")
        .then((insertedData) => {
          trx.commit();
          console.log(insertedData);
          return res.status(200).json({ message: "inserted to database" });
        })
        .catch((err) => {
          console.log(`error inserting data database \n ${err}`);
          trx.rollback();
          return res.status(400).json({ err });
        });
    });
  } catch (error) {
    console.log("error connecting to db!");
  }
}
