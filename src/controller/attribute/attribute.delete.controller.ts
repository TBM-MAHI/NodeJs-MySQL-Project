import { Request, Response } from "express";
import type { Knex } from "knex";

export function handleAttributeDelete(req: Request, res: Response, knex: Knex) {
  let { attributeId } = req.params;
  try {
    knex.transaction(function (trx) {
      trx
        .del()
        .from("attribute_names")
        .where({ id: attributeId })
        .then(() => {
          trx.commit();
          res.status(200).json({ message: "deleted from database" });
        })
        .catch((err) => {
          trx.rollback();
          return res
            .status(400)
            .json({ err: `error deleting data from the database` });
        });
    });
  } catch (error) {
    console.log("error connecting to db!");
  }
}
