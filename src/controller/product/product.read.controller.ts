import { Request, Response } from "express";
import type { Knex } from "knex";

export function handleProductRead(req: Request, res: Response, knex: Knex) {
  const { productId } = req.params;
  try {
    knex
      .select("*")
      .from("products")
      .where({ id: productId })
      .then((products) => {
        if (products.length === 0)
          return res.status(400).json({ err: "PRODUCT not found!" });
        return res.status(200).json({ data: products[0] });
      })
      .catch((err) => {
        res
          .status(400)
          .json({ err: `error reading data from the database \n ${err}` });
      });
  } catch (error) {
    console.log("error connecting to db!");
  }
}
