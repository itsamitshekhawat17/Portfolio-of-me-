'use client';
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  institution?: string;
  company?: string;
  duration: string;
  description: string;
  isLeft: boolean;
}

export const TimelineItem = ({
  title,
  institution,
  company,
  duration,
  description,
  isLeft
}: TimelineItemProps) => {
  return (
    <div className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'} mb-8`}>
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-md bg-[#0300145e] backdrop-blur-sm border border-[#7042f88b] p-6 rounded-xl shadow-xl ${isLeft ? 'mr-auto' : 'ml-auto'}`}
      >
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <div className="text-sm text-purple-400 mb-2">
          {institution && <span>{institution}</span>}
          {company && <span>{company}</span>}
          <span className="ml-2">| {duration}</span>
        </div>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    </div>
  );
};
