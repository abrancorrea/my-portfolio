import { IAssetImage } from "./Project";

export interface ITechnology {
  _id: string;
  _createdAt: Date;
  name: string;
  logo: IAssetImage;
  description: string;
  level: TechLevelsEnumm;
}

export interface IAdditionalTechnology {
  _id: string;
  _createdAt: Date;
  name: string;
}

export const TECH_LEVELS = [
  { title: "Beginner", value: "Beginner" },
  { title: "Intermediate", value: "Intermediate" },
  { title: "Advanced", value: "Advanced" },
  { title: "Expert", value: "Expert" },
] as const;

export type TechLevelsEnumm = (typeof TECH_LEVELS)[number]["value"];
export type TechLevelsTitleEnumm = (typeof TECH_LEVELS)[number]["title"];

export const TechLevelPercentages: Record<TechLevelsEnumm, number> = {
  Beginner: 30,
  Intermediate: 50,
  Advanced: 85,
  Expert: 100,
};
