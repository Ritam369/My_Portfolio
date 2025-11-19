import React from "react";
import { motion } from "framer-motion";
import { styles } from '@/styles';
import { about_page_text, services } from '@/constants';
import { SectionWrapper } from '@/hooks';
import { fadeIn, textVariant } from '@/utils/motion';
import ServiceCard from "./ServiceCard";

function About() {
    return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 py-8 transition-colors duration-300">
        <motion.div variants={textVariant(0.1)} className="text-center">
            <h2 className={`${styles.sectionHeadText} text-navy-900 dark:text-slate-100`}>About Me.</h2>
        </motion.div>

            <motion.p 
                variants={fadeIn("", "", 0.1, 1)} 
                className="mt-4 text-navy-700 dark:text-slate-300 text-[17px] max-w-10xl leading-[30px]"
            >
                {about_page_text}
            </motion.p>

            <div className="flex justify-center items-center mt-12 sm:mt-16">
                <div className="text-center">
                    <h2 className="text-navy-900 dark:text-slate-100 text-[32px] sm:text-[40px] font-bold mb-4">
                        Technical Expertise
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-navy-500 to-navy-700 dark:from-blue-500 dark:to-blue-400 mx-auto rounded-full"></div>
                    <p className="mt-4 text-navy-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Specialized domains where I bring innovation and technical excellence
                    </p>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-0 md:mx-16 lg:mx-0 max-w-7xl"
                 style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(71, 85, 105, 0.02) 50%, transparent 100%)' }}
            >
                {services.map((service, index) => (
                    <div key={service.title} className="w-full sm:max-w-[320px] mx-auto">
                        <ServiceCard key={service.title} index={index} {...service} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(About, "about");
