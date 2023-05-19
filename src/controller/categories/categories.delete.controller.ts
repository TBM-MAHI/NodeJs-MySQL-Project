import { Request, Response } from "express";
import type { Knex } from "knex";

export function handleCategoriesDelete(req: Request, res: Response, knex: Knex) {
  const { categoryId } = req.params;
  knex.transaction(function (trx) {
    trx
      .del()
      .from("categories")
      .where({ id: categoryId })
      .then(() => {
        trx.commit(); 
        res.status(200).json({ message: "deleted from database" });
      })
      .catch((err) => {
        trx.rollback();
       return res.status(400).json({ err: `error deleting data from the database` });
      });
  });
}
