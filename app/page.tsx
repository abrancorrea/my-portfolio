import {
  AboutMeSection,
  AddditionalTechSection,
  HeroBanner,
  ProjectsSection,
  TechSection,
} from "@/components";

export const revalidate = 3600;

export default async function Home() {
  return (
    <main className="container mx-auto">
      <HeroBanner />
      <ProjectsSection />
      <TechSection />
      <AddditionalTechSection />
      <AboutMeSection />
    </main>
  );
}
