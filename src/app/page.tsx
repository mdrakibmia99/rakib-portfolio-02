import Hero from "@/components/modules/hero/Hero";
import SkillHighlights from "@/components/modules/skill/SkillHighlights";
import About from "@/components/modules/About/About";
import { getAllSkill } from "@/services";
import { TSkillCategory } from "@/types/globalTypes";
import Education from "@/components/modules/Education/Education";
import Contact from "@/components/modules/contact/Contact";

export default async function Home() {
  const { data: skills } = await getAllSkill();
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <SkillHighlights skills={skills as TSkillCategory[]} />
      <Contact/>
    </div>
  );
}
