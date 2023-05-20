import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  try {
    await knex.schema.createTable("categories", (table: any) => {
      table.increments("id").primary();
      table.string("name").notNullable();
       table.integer("parentCategoryId").unsigned().references("categories.id");
    });
  } catch (error) {
    console.log(error);
  }
  try {
    await knex.schema.createTable("products", (table: any) => {
      table.increments("id").primary();
      table.string("name").notNullable(); 
    });
  } catch (error) {
   console.log(error)
      
  }

  try {
    await knex.schema.createTable("attribute_names", (table: any) => {
      table.increments("id").primary();
      table.string("name").notNullable();
    });
  } catch (error) {
    console.log(error);
  }

  try {
    await knex.schema.createTable("product_attribute", (table: any) => {
      table.increments("id").primary();
      table.string("attribute_value");
      table.integer("productId").unsigned().references("products.id");
      table.integer("attributeId").unsigned().references("attribute_names.id");
    });
  } catch (error) {
    console.log(error);
  }

  try {
    await knex.schema.createTable("category_product", (table: any) => {
      table.integer("categoryId").unsigned().references("categories.id");
      table.integer("productId").unsigned().references("products.id");
      table.primary(["categoryId", "productId"]);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("categories");
  await knex.schema.dropTableIfExists("attribute_names");
  await knex.schema.dropTableIfExists("products");
  await knex.schema.dropTableIfExists("product_attribute");
  await knex.schema.dropTableIfExists("category_product");
}
