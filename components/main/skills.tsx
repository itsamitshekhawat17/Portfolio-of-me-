"use client";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { isLowEndDevice } from "@/lib/mobile";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-12 pb-0"
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {SKILL_DATA.slice(0, isLowEndDevice() ? 8 : SKILL_DATA.length).map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {FRONTEND_SKILL.length > 0 && !isLowEndDevice() && (
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {FRONTEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      )}
      {BACKEND_SKILL.length > 0 && !isLowEndDevice() && (
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {BACKEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      )}
      {FULLSTACK_SKILL.length > 0 && !isLowEndDevice() && (
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {FULLSTACK_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      )}
      {OTHER_SKILL.length > 0 && !isLowEndDevice() && (
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {OTHER_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      )}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          {typeof window !== 'undefined' && isLowEndDevice() ? (
            // Static gradient background for mobile devices
            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
          ) : (
            // Video for desktop and high-end devices
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
            >
              <source src="/videos/skills-bg.webm" type="video/webm" />
            </video>
          )}
        </div>
      </div>
    </section>
  );
};
