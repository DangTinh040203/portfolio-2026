import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

const AboutSection = dynamic(() =>
  import("@/components/sections/AboutSection").then((m) => ({ default: m.AboutSection })),
);

const SkillsSection = dynamic(() =>
  import("@/components/sections/SkillsSection").then((m) => ({ default: m.SkillsSection })),
);

const ExperienceSection = dynamic(() =>
  import("@/components/sections/ExperienceSection").then((m) => ({ default: m.ExperienceSection })),
);

const ProjectsSection = dynamic(() =>
  import("@/components/sections/ProjectsSection").then((m) => ({ default: m.ProjectsSection })),
);

const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then((m) => ({ default: m.ContactSection })),
);

const FooterSection = dynamic(() =>
  import("@/components/sections/FooterSection").then((m) => ({ default: m.FooterSection })),
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
