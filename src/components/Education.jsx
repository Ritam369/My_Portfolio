import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/styles';
import { SectionWrapper } from '@/hooks';
import { fadeIn, textVariant } from '@/utils/motion';

const EducationCard = ({ degree, institution, duration, gpa, description, index, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="relative"
  >
    <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-xl border border-navy-200 dark:border-slate-600 hover:border-navy-400 dark:hover:border-slate-500 transition-all duration-300 shadow-lg hover:shadow-xl group">
      {/* Dot on card side */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.4 }}
        className={`absolute top-8 ${isLeft ? '-right-3' : '-left-3'} md:block hidden`}
      >
        <div className="relative">
          <div className="w-6 h-6 bg-navy-600 dark:bg-blue-500 rounded-full border-4 border-slate-50 dark:border-slate-900 shadow-lg"></div>
          <div className="absolute inset-0 bg-navy-600 dark:bg-blue-500 rounded-full animate-ping opacity-20"></div>
        </div>
      </motion.div>

      <h3 className="text-navy-900 dark:text-slate-100 text-xl font-bold mb-2">{degree}</h3>
      <h4 className="text-navy-700 dark:text-slate-300 text-lg font-semibold mb-3">{institution}</h4>
      <div className="flex items-center gap-4 mb-3">
        <p className="text-navy-600 dark:text-slate-400 text-sm font-medium">{duration}</p>
        {gpa && (
          <span className="bg-navy-100 dark:bg-slate-700 text-navy-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-semibold">
            {gpa}
          </span>
        )}
      </div>
      <p className="text-navy-700 dark:text-slate-300 text-base leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Techno Bengal Institute of Technology",
      duration: "2023 - 2027 (Expected)",
      gpa: "7.58 GPA",
      year: "2023",
  description: "Currently in the third year of B.Tech in Computer Science Engineering, with a focus on software development, algorithms, and emerging technologies. Awarded the silver medal in the Code-Ardor competition at the college tech‑fest Bits2Bytes 2024 and the gold medal in the Return 0 hackathon, the flagship event of Bits2Bytes 2025. Actively involved in coding communities and competitive programming."
    },
    {
      degree: "Higher Secondary (10+2 Grades)",
      institution: "Bidhannagar Govt. High School",
      duration: "2021 - 2023",
      gpa: "84.2%",
      year: "2021",
      description: "Completed Higher Secondary examination with strong performance in Physics, Chemistry, Mathematics, and Computer Science."
    },
    {
      degree: "Secondary (10th Grade)",
      institution: "Bidhannagar Municipal School",
      duration: "2021",
      gpa: "91.8%",
      year: "2021",
      description: "Completed Madhyamik examination with excellent results, establishing a strong foundation in core subjects."
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-16 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className={`${styles.sectionSubText} text-navy-600 dark:text-slate-400`}>Academic Journey</p>
        <h2 className={`${styles.sectionHeadText} text-navy-900 dark:text-slate-100`}>Education.</h2>
      </motion.div>

      <div className="mt-16 relative max-w-6xl mx-auto">
        {/* Center Vertical Timeline with Gradient - Desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1.5 hidden md:block">
          {/* Animated flowing gradient */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full rounded-full origin-top overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-navy-500 via-navy-600 to-transparent dark:from-blue-500 dark:via-blue-600 dark:to-transparent" />
            <motion.div
              animate={{ y: ['100%', '-100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>

        {/* Mobile timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 md:hidden bg-gradient-to-b from-navy-500 to-navy-400 dark:from-blue-500 dark:to-blue-400"></div>
        
        <div className="space-y-12 relative">
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative">
                {/* Desktop Layout - Alternating */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-16 items-center">
                  {isLeft ? (
                    <>
                      <EducationCard index={index} {...edu} isLeft={true} />
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <EducationCard index={index} {...edu} isLeft={false} />
                    </>
                  )}
                </div>

                {/* Mobile Layout - All on right */}
                <div className="md:hidden pl-12">
                  <EducationCard index={index} {...edu} isLeft={false} />
                  {/* Mobile Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.4 }}
                    className="absolute left-4 top-8 transform -translate-x-1/2"
                  >
                    <div className="w-4 h-4 bg-navy-600 dark:bg-blue-500 rounded-full border-2 border-slate-50 dark:border-slate-900"></div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Education, "education");
