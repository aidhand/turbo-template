import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts",
  dialect: "sqlite",
  driver: "turso",
  out: "./migrations",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL ?? "",
    authToken: process.env.TURSO_AUTH_TOKEN ?? "",
  },
});
