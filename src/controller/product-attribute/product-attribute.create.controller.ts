import { Request, Response } from "express";
import type { Knex } from "knex";

export function handleProduct_AttributeCreate(req: Request, res: Response, knex: Knex) {
  let { attributeId, productId } = req.params;
  let {value} = req.body;
  if (!attributeId || !productId || !value)
    return res.status(400).json({ message: "Input fields Empty!" });
  try {
    knex.transaction(function (trx) {
      trx
        .insert({ productId, attributeId, attribute_value: value })
        .into("product_attribute")
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
