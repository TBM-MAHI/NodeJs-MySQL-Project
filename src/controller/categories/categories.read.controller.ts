import { Request, Response } from "express";
import type { Knex } from "knex";

export function handleCategoriesRead(req: Request, res: Response, knex: Knex) {
     const { categoryId } = req.params;
  knex
    .select("*")
    .from("categories")
    .where({ id: categoryId })
      .then((categories) => {
          if(categories.length===0) 
        return res.status(400).json({err:"Category not found!"})
          return res.status(200).json({ data: categories[0] });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ err: `error reading data from the database \n ${err}` });
    });
}
