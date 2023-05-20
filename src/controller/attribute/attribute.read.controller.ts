import { Request, Response } from "express";
import type { Knex } from "knex";

export function handleAttributeRead(req: Request, res: Response, knex: Knex) {
  const { attributeId } = req.params;
  try {
    knex
      .select("*")
      .from("attribute_names")
      .where({ id: attributeId })
      .then((attributes) => {
        if (attributes.length === 0)
          return res.status(400).json({ err: "attribute not found!" });
        return res.status(200).json({ data: attributes[0] });
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
