import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemas } from "./sanity/schemas";

const config = defineConfig({
  projectId: "4n39dd35",
  dataset: "production",
  title: "My Portfolio",
  apiVersion: "2023-11-26",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
