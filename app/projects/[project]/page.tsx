import React from "react";
import { getProject } from "@/sanity/sanity-utils";
import { ImageSlider } from "./component";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export interface ProjectPageProps {
  params: {
    project: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const slug = params.project;

  const project = await getProject(slug);

  console.log("project", project);
  return (
    <main className="p-10 container mx-auto">
      <section className="title-section max-w-2xl mx-auto">
        <h3 className="text-3xl mb-5">{project.name}</h3>
      </section>
      <section className="max-w-md mx-auto mt-10">
        <ImageSlider images={project.images} />
      </section>
      <section className="text-base text-justify mt-10 max-w-2xl mx-auto">
        {!!project.content && <PortableText value={project.content} />}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea optio ratione
        pariatur itaque consequuntur quia necessitatibus commodi eos earum fuga, nobis
        praesentium perferendis aut. Incidunt cum blanditiis repudiandae sequi.
      </section>

      <section className="max-w-2xl mx-auto my-10 flex justify-between">
        <p className="text-base font-bold">Technologies used:</p>

        <div className="tech-icons-used flex">
          {project.technologies.map((el) => (
            <div key={el.logo.url} className="basis-auto h-[50px] w-[50px] mx-3">
              <Image src={el.logo.url} alt={el.logo.alt} width={50} height={50} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
