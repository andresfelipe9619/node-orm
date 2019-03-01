"use strict";
exports.up = knex =>
  knex.schema.createTable("contacts", table => {
    table.increments("id").primary();
    table.string("firstName");
    table.string("lastName");
    table
      .string("emailAddress")
      .unique()
      .notNullable();
  });

exports.down = knex => knex.schema.dropTable("contacts");
