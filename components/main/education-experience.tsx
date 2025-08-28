'use client';
import { EEText } from "@/components/sub/ee-text";
import { TimelineItem } from "@/components/sub/timeline-item";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "@/constants";

export const EducationExperience = () => {
  return (
    <section
      id="education-experience"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-8 pb-8"
      style={{ transform: "scale(0.9)" }}
    >
      <EEText />
      
      {/* Education Section */}
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl text-center text-white font-bold mb-8">Education</h2>
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>
          
          {/* Timeline Items */}
          <div className="relative w-full">
            {EDUCATION_DATA.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                institution={item.institution}
                duration={item.duration}
                description={item.description}
                isLeft={item.isLeft}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl text-center text-white font-bold mb-8">Experience</h2>
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {/* Timeline Items */}
          <div className="relative w-full">
            {EXPERIENCE_DATA.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                company={item.company}
                duration={item.duration}
                description={item.description}
                isLeft={item.isLeft}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/blackhole.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
