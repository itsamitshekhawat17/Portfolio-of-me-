import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { EducationExperience } from "@/components/main/education-experience";
import { Contact } from "@/components/main/contact";

export default function Home() {
  // Main page component
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <EducationExperience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
