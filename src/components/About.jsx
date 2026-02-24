import React from "react";
import { motion } from "framer-motion";
import { styles } from '@/styles';
import { about_page_text, services } from '@/constants';
import { SectionWrapper } from '@/hooks';
import { fadeIn, textVariant } from '@/utils/motion';
import ServiceCard from "./ServiceCard";

function About() {
    return (
    <div className="relative px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-zinc-950/30 backdrop-blur-sm pt-12 pb-20 transition-colors duration-300 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-navy-100/20 dark:bg-slate-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-100/20 dark:bg-slate-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            {/* Left-Aligned About Me Section */}
            <div className="flex gap-8 mb-12">
                {/* Vertical Accent Line */}
                <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="hidden md:block w-1.5 bg-gradient-to-b from-navy-500 via-navy-600 to-transparent dark:from-blue-500 dark:via-blue-600 dark:to-transparent rounded-full origin-top"
                    style={{ minHeight: '200px' }}
                />
                
                {/* Content */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-navy-600 dark:text-slate-400 text-sm uppercase tracking-wider mb-3 font-semibold">Get to know me</p>
                        <h2 className="text-navy-900 dark:text-slate-100 text-4xl md:text-5xl lg:text-6xl font-black mb-6">About Me.</h2>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-navy-700 dark:text-slate-300 text-lg leading-relaxed"
                    >
                        {about_page_text}
                    </motion.p>
                </div>
            </div>

            {/* Technical Expertise Section */}
            <div>
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-navy-600 dark:text-slate-400 text-sm uppercase tracking-wider mb-3 font-semibold">What I Do</p>
                        <h2 className="text-navy-900 dark:text-slate-100 text-3xl md:text-4xl font-bold mb-4">
                            Technical Expertise
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-navy-500 to-navy-700 dark:from-blue-500 dark:to-blue-400 mx-auto rounded-full mb-4"></div>
                        <p className="text-navy-600 dark:text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
                            Specialized domains where I bring innovation and technical excellence
                        </p>
                    </motion.div>
                </div>

                {/* Original Card Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div 
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                            <ServiceCard index={index} {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}

export default SectionWrapper(About, "about");
