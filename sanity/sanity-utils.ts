import { createClient, groq } from "next-sanity";
import { IProject } from "@/types/Project";
import { IAdditionalTechnology, ITechnology } from "@/types/Technologies";
import { IPersonalStep } from "@/types/PersonalStep";

export const getProjects = async () => {
  const client = createClient({
    projectId: "4n39dd35",
    dataset: "production",
    apiVersion: "2023-11-26",
  });

  return client.fetch<IProject[]>(groq`
  *[_type== 'project']{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "mainImage": mainImage{
     "url": asset->url,
      alt
      },
      "images": images[]{
       alt,
      "url": asset->url
    },
    url,
    summary
  }
  `);
};

export const getProject = async (slug: string) => {
  const client = createClient({
    projectId: "4n39dd35",
    dataset: "production",
    apiVersion: "2023-11-26",
  });

  return client.fetch<IProject>(
    groq`
  *[_type== 'project' && slug.current ==$slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "mainImage": mainImage{
     "url": asset->url,
      alt
      },
      "images": images[]{
       alt,
      "url": asset->url
    },
    url,
    content,
    technologies[]->{
    name,
    level,
    "logo": logo{
     "url": asset->url,
      alt
      },
  }
  }
  `,
    {
      slug,
    }
  );
};

export const getTechnologies = async () => {
  const client = createClient({
    projectId: "4n39dd35",
    dataset: "production",
    apiVersion: "2023-11-26",
  });

  return client.fetch<ITechnology[]>(groq`
  *[_type== 'technology']{
    _id,
    _createdAt,
    name,
    level,
    description,
    "logo": logo{
     "url": asset->url,
      alt
      },
  }
  `);
};

export const getAdditionalTechnologies = async () => {
  const client = createClient({
    projectId: "4n39dd35",
    dataset: "production",
    apiVersion: "2023-11-26",
  });

  return client.fetch<IAdditionalTechnology[]>(groq`
  *[_type=='additionalTechnology']{
    _id,
    _createdAt,
    name,
  }
  `);
};

export const getPersonalSteps = async () => {
  const client = createClient({
    projectId: "4n39dd35",
    dataset: "production",
    apiVersion: "2023-11-26",
  });

  return client.fetch<IPersonalStep[]>(groq`
  *[_type=='personalStep'] | order(year asc){
    _id,
    _createdAt,
    year,
    summary,
  }
  `);
};
