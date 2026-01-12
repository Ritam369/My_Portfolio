import React from 'react';
import { motion } from "framer-motion";
import { styles } from '@/styles';
import { SectionWrapper } from '@/hooks';
import { fadeIn, textVariant } from '@/utils/motion';

const ProjectCard = ({ project, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="group relative bg-white/98 dark:bg-slate-800/98 backdrop-blur-sm rounded-2xl border border-navy-200/60 dark:border-slate-600/60 hover:border-navy-400/80 dark:hover:border-slate-500/80 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-navy-300/20 dark:hover:shadow-slate-700/20 hover:-translate-y-2"
  >
    {/* Project header with status indicator */}
    <div className="p-8">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse shadow-lg shadow-blue-400/50"></div>
            <h3 className="text-navy-900 dark:text-slate-100 text-2xl font-bold group-hover:text-navy-700 dark:group-hover:text-slate-200 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <span className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
              project.status === 'In Development' 
                ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 border-blue-200 group-hover:from-blue-100 group-hover:to-indigo-100' 
                : 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border-green-200 group-hover:from-green-100 group-hover:to-emerald-100'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${
                project.status === 'In Development' ? 'bg-blue-500' : 'bg-green-500'
              }`}></div>
              {project.status}
            </span>
          </div>
        </div>
        {/* MERN Stack indicator */}
        <div className="bg-gradient-to-br from-navy-50 to-navy-100 dark:from-slate-700 dark:to-slate-600 rounded-xl p-3 border border-navy-200/60 dark:border-slate-500/60 group-hover:from-navy-100 group-hover:to-navy-150 dark:group-hover:from-slate-600 dark:group-hover:to-slate-500 transition-all duration-300">
          <div className="text-navy-700 dark:text-slate-200 font-mono text-xs font-bold tracking-wider">MERN</div>
        </div>
      </div>
      
      <p className="text-navy-700 dark:text-slate-300 text-base leading-relaxed mb-6 group-hover:text-navy-800 dark:group-hover:text-slate-200 transition-colors">
        {project.description}
      </p>
      
      {/* Technology stack with enhanced styling */}
      <div className="mb-6">
        <h4 className="text-navy-800 dark:text-slate-200 font-semibold text-sm mb-3 uppercase tracking-wide">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-navy-50 to-navy-100 dark:from-slate-700 dark:to-slate-600 hover:from-navy-100 hover:to-navy-150 dark:hover:from-slate-600 dark:hover:to-slate-500 text-navy-800 dark:text-slate-200 text-sm rounded-lg border border-navy-200/60 dark:border-slate-500/60 font-medium transition-all duration-300 hover:shadow-md hover:shadow-navy-200/30 dark:hover:shadow-slate-600/30 hover:-translate-y-0.5"
            >
              <div className="w-1.5 h-1.5 bg-navy-500 dark:bg-blue-400 rounded-full mr-2"></div>
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Key features with professional styling */}
      {project.highlights && (
        <div>
          <h4 className="text-navy-800 dark:text-slate-200 font-semibold text-sm mb-3 uppercase tracking-wide">Key Features</h4>
          <ul className="space-y-3">
            {project.highlights.map((highlight, highlightIndex) => (
              <li key={highlightIndex} className="flex items-start group/item">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-navy-100 to-navy-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center mr-3 mt-0.5 group-hover/item:from-navy-200 group-hover/item:to-navy-300 dark:group-hover/item:from-slate-600 dark:group-hover/item:to-slate-500 transition-all duration-300">
                  <div className="w-2 h-2 bg-navy-600 dark:bg-blue-400 rounded-full group-hover/item:bg-navy-700 dark:group-hover/item:bg-blue-300 transition-colors duration-300"></div>
                </div>
                <span className="text-navy-600 dark:text-slate-300 text-sm leading-relaxed group-hover/item:text-navy-700 dark:group-hover/item:text-slate-200 transition-colors duration-300">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    {/* Bottom gradient bar */}
    <div className="h-2 bg-gradient-to-r from-navy-400 via-navy-500 to-navy-600 dark:from-blue-600 dark:via-blue-500 dark:to-blue-600 rounded-b-2xl group-hover:from-navy-500 group-hover:via-navy-600 group-hover:to-navy-700 dark:group-hover:from-blue-500 dark:group-hover:via-blue-400 dark:group-hover:to-blue-500 transition-all duration-300"></div>
    
    {/* Subtle grid pattern overlay */}
    <div className="absolute inset-0 rounded-2xl opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #475569 1px, transparent 0)', backgroundSize: '20px 20px' }} />
  </motion.div>
);

function Projects() {
  const projectsData = [
    {
      title: "MantraMart",
      status: "In Development",
      description: "A comprehensive platform connecting users with Pujaris/Purohits for various religious ceremonies across India. The platform offers seamless booking of religious services, quick delivery of Puja Samagris, and curated Puja packages with modern UI/UX design and secure payment processing.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Authentication", "Tailwind CSS", "Payment Gateway"],
      highlights: [
        "MVC architecture implementation for scalable and maintainable codebase",
        "Real-time booking system with advanced user authentication and authorization",
        "Location-based service provider matching with intelligent algorithms",
        "Integrated payment gateway for seamless and secure transactions",
        "Comprehensive admin dashboard for service and user management",
        "Responsive design optimized for both mobile and desktop platforms"
      ]
    },
    {
      title: "Jersify",
      status: "In Development", 
      description: "A modern e-commerce platform dedicated to football enthusiasts, offering authentic team jerseys and personalized football kits. Features include advanced product catalog, secure checkout process, and optimized shopping experience with real-time inventory management.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe API", "Cloudinary", "Tailwind CSS"],
      highlights: [
        "Dynamic product catalog with advanced filtering, sorting, and search capabilities",
        "Secure payment processing integration with Stripe for multiple payment methods",
        "User account management with order history, wishlist, and profile customization",
        "Responsive design optimized for mobile-first shopping experience",
        "Real-time inventory management system with automated stock updates",
        "Image optimization and CDN integration using Cloudinary for fast loading"
      ]
    }
  ];

  return (
    <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-16 transition-colors duration-300">
      <motion.div variants={textVariant(0.1)} className="text-center">
        <p className={`${styles.sectionSubText} text-navy-600 dark:text-slate-400`}>
          Current Development Work
        </p>
        <h2 className={`${styles.sectionHeadText} text-navy-900 dark:text-slate-100`}>
          Projects.
        </h2>
        <motion.p
          className="mt-5 text-navy-700 dark:text-slate-300 text-[16px] max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Here are some of the full-stack web applications I'm currently developing using the MERN stack, showcasing modern web development practices and problem-solving skills.
        </motion.p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Projects, "projects");
