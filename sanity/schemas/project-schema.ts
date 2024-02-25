const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [{ name: "alt", title: "Alt", type: "string" }],
        },
      ],
      options: { hotspot: true },
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "summary",
      title: "Quick Summary",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "technologies",
      type: "array",
      title: "Technologies Used",
      of: [
        {
          type: "reference",
          to: [{ type: "technology" }],
        },
      ],
    },
  ],
};

export default project;
