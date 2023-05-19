import express from "express";
import { config } from "dotenv";
config()
import  cors from "cors";
import bodyParser from "express";

import categoriesRouter from './routes/category.routes';
import attributesRouter from "./routes/attributes.routes";
import productRouter from "./routes/products.routes";
import productAttributeRouter from "./routes/product_attribute.routes";

let app = express();
let PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


//CRUD operations
app.use("/categories", categoriesRouter);
app.use("/attribute", attributesRouter);
app.use("/product", productRouter);
app.use("/productAttribute", productAttributeRouter);

app.listen(PORT, () => console.log("server running on port " + PORT));
