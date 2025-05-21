import Hero from "@/components/modules/hero/Hero";
import SkillHighlights from "@/components/modules/skill/SkillHighlights";
import { getAllSkill } from "@/services";
import { TSkillCategory } from "@/types/globalTypes";

export default async function Home() {
  const { data: skills } = await getAllSkill();
  return (
    <div>
      <Hero />
      <SkillHighlights skills={skills as TSkillCategory[]} />
    </div>
  );
}
