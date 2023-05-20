import { Request, Response } from "express";
import type { Knex } from "knex";

export function handleProductCreate(req: Request, res: Response, knex: Knex) {
  let { name } = req.body;
  if (!name) return res.status(400).json({ message: "Input fields Empty!" });
  try {
    knex.transaction(function (trx) {
      trx
        .insert({ name }, "id")
        .into("products")
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
