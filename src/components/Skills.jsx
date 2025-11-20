import React from 'react'
import { motion } from 'framer-motion'
import { techStack } from '@/constants'
import { styles } from '@/styles'
import { SectionWrapper } from '@/hooks'

function Skills() {
    return (
        <div className='bg-slate-50 dark:bg-slate-900 py-16 transition-colors duration-300'>
            <div className="text-center mb-12">
                <p className={`${styles.sectionSubText} text-navy-600 dark:text-slate-400`}>Technical Proficiency</p>
                <h2 className={`${styles.sectionHeadText} text-navy-900 dark:text-slate-100`}>Skills.</h2>
            </div>
            <div className='flex justify-center lg:px-40 md:px-12 px-14 pb-8'>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='flex flex-wrap justify-center gap-8 max-w-7xl'
                >
                    {techStack.map((skill, index) => (
                        <motion.div
                            className='aspect-square w-[85px] h-[85px] bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-navy-50 dark:hover:bg-slate-700 transition-colors group shadow-lg border border-navy-200 dark:border-slate-600 hover:border-navy-400 dark:hover:border-slate-500'
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <img
                                src={skill.imageUrl}
                                alt={skill.name}
                                className='w-14 h-14 object-contain group-hover:scale-110 transition-transform'
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default SectionWrapper(Skills, "skills");
