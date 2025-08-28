import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { EducationExperience } from "@/components/main/education-experience";
import { Contact } from "@/components/main/contact";
import { ProfileViewCount } from "@/components/sub/profile-view-count";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <EducationExperience />
        <Projects />
        <Contact />
        <ProfileViewCount />
      </div>
    </main>
  );
}
