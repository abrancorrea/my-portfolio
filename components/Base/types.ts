const COLOR_TYPES = {
  primary: "PRIMARY",
} as const;

export type colorTypesEnum = keyof typeof COLOR_TYPES;
