/* eslint-disable @typescript-eslint/no-explicit-any */
// components/SkillHighlights.tsx

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LaptopIcon,
  ServerIcon,
  DatabaseIcon,
  CodeIcon,
  WrenchIcon,
  PaletteIcon,
} from "lucide-react";
// import icon from "@/assets/skill/nodejs.webp";
import { JSX } from "react";
import { TSkillCategory } from "@/types/globalTypes";
export const iconMap: Record<string, JSX.Element> = {
  LaptopIcon: <LaptopIcon className="h-6 w-6 text-blue-400" />,
  ServerIcon: <ServerIcon className="h-6 w-6 text-blue-400" />,
  DatabaseIcon: <DatabaseIcon className="h-6 w-6 text-blue-400" />,
  CodeIcon: <CodeIcon className="h-6 w-6 text-blue-400" />,
  WrenchIcon: <WrenchIcon className="h-6 w-6 text-blue-400" />,
  PaletteIcon: <PaletteIcon className="h-6 w-6 text-blue-400" />,
};

// const skills = [
//   {
//     title: "Frontend",
//     icon: "LaptopIcon",
//     items: [
//       { name: "JavaScript", icon },
//       { name: "TypeScript", icon },
//       { name: "React.js", icon },
//       { name: "Next.js", icon },
//       { name: "Tailwind CSS", icon },
//       { name: "ShadCN UI", icon },
//       { name: "Ant Design", icon },
//       { name: "Redux", icon },
//       { name: "React Query", icon },
//       { name: "Framer Motion", icon },
//       { name: "GSAP", icon },
//     ],
//   },
//   {
//     title: "Backend",
//     icon: "ServerIcon",
//     items: [
//       { name: "Node.js", icon },
//       { name: "Express.js", icon },
//       { name: "REST API", icon },
//     ],
//   },
//   {
//     title: "Database",
//     icon: "DatabaseIcon" ,
//     items: [
//       { name: "MongoDB", icon },
//       { name: "PostgreSQL", icon },
//       { name: "Prisma ORM", icon },
//       { name: "Mongoose ODM", icon },
//     ],
//   },
//   {
//     title: "Programming",
//     icon: "CodeIcon",
//     items: [
//       { name: "JavaScript", icon },
//       { name: "TypeScript", icon },
//       { name: "SQL", icon },
//     ],
//   },
//   {
//     title: "Tools",
//     icon: "WrenchIcon",
//     items: [
//       { name: "VS Code", icon },
//       { name: "Git CLI", icon },
//       { name: "GitHub", icon },
//       { name: "Postman", icon },
//       { name: "Chrome DevTools", icon },
//       { name: "ClickUp", icon },
//     ],
//   },
//   {
//     title: "Creative",
//     icon: "PaletteIcon",
//     items: [
//       { name: "Figma", icon },
//       { name: "Illustrator", icon },
//       { name: "Photoshop", icon },
//     ],
//   },
// ];

export default function SkillHighlights({
  skills,
}: {
  skills: TSkillCategory[];
}) {
  return (
    <section className="custom-container py-16">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-2">
          My Skills
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Skill Highlights
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills?.map((section) => (
          <Card
            key={section.title}
            className="bg-card !py-0 !gap-1 text-card-foreground shadow-md h-full"
          >
            <div className="p-6 flex items-center gap-3">
              <div>{iconMap[section.icon as any]}</div>
              <h3 className=" font-bold leading-none tracking-tight text-2xl">
                {section.title}
              </h3>
            </div>
            <CardContent className="pt-0 pb-6 px-6">
              <div className="flex flex-wrap gap-2">
                {section?.items?.map((item) => (
                  <div
                    key={item.name}
                    className="border px-2.5 text-xs font-medium bg-secondary/50 text-secondary-foreground flex items-center gap-2 py-1.5 rounded-md"
                  >
                    {item?.icon && (
                      <Image
                        src={item?.icon}
                        alt={item.name}
                        width={24}
                        height={24}
                        className="size-5 rounded-sm object-cover"
                      />
                    )}

                    {item.name}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
