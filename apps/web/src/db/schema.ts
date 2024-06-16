import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const tasks = sqliteTable("tasks", {
  id: integer("id", {
    mode: "number",
  }).primaryKey(),

  name: text("name", {
    mode: "text",
  }).notNull(),

  completed: integer("completed", {
    mode: "boolean",
  }).default(false),
});

export default {
  tasks,
};
