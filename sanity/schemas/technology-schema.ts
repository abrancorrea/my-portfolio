import { TECH_LEVELS } from "@/types/Technologies";

const project = {
  name: "technology",
  title: "Technologies",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: TECH_LEVELS,
      },
    },
    {
      name: "logo",
      title: "logo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
  ],
};

export default project;
