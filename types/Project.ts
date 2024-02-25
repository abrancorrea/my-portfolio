import { PortableTextBlock } from "sanity";
import { ITechnology } from "./Technologies";

export interface IProject {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  summary?: string;
  mainImage: IAssetImage;
  images: IAssetImage[];
  content?: PortableTextBlock[];
  technologies: ITechnology[];
}

export interface IAssetImage {
  url: string;
  alt: string;
}
