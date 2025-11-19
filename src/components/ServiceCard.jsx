import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className="w-full max-w-[300px] mx-auto">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="relative group"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-500/10 via-navy-600/5 to-navy-700/10 dark:from-slate-600/10 dark:via-slate-700/5 dark:to-slate-800/10 rounded-xl blur-sm group-hover:from-navy-500/20 group-hover:via-navy-600/15 group-hover:to-navy-700/20 dark:group-hover:from-slate-600/20 dark:group-hover:via-slate-700/15 dark:group-hover:to-slate-800/20 transition-all duration-500" />
      
      {/* Main card */}
      <div className="relative bg-white/98 dark:bg-slate-800/98 backdrop-blur-lg border border-navy-200/50 dark:border-slate-600/50 hover:border-navy-400/80 dark:hover:border-slate-500/80 rounded-xl p-8 min-h-[380px] flex flex-col transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-navy-300/25 dark:group-hover:shadow-slate-700/25 group-hover:-translate-y-2">
        
        {/* Icon section with hexagonal design */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-navy-50 to-navy-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center group-hover:from-navy-100 group-hover:to-navy-200 dark:group-hover:from-slate-600 dark:group-hover:to-slate-500 transition-all duration-300 border-2 border-navy-200/60 dark:border-slate-500/60 group-hover:border-navy-300/80 dark:group-hover:border-slate-400/80 shadow-lg">
              <motion.img
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={icon}
                alt={title}
                className="w-14 h-14 object-contain filter drop-shadow-sm"
              />
              {/* Technical circuit pattern overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-navy-500/5 to-navy-600/10 dark:via-slate-400/5 dark:to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Floating indicator */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-navy-500 to-navy-600 dark:from-blue-500 dark:to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col text-center space-y-4">
          <h3 className="text-navy-900 dark:text-slate-100 text-xl font-bold group-hover:text-navy-700 dark:group-hover:text-slate-200 transition-colors leading-tight tracking-tight">
            {title}
          </h3>
          
          {description && (
            <p className="text-navy-600 dark:text-slate-300 text-sm leading-relaxed group-hover:text-navy-700 dark:group-hover:text-slate-200 transition-colors flex-1">
              {description}
            </p>
          )}
          
          {/* Technical accent bar */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-1">
              <div className="w-12 h-1 bg-gradient-to-r from-navy-400 to-navy-600 dark:from-blue-500 dark:to-blue-600 rounded-full group-hover:from-navy-500 group-hover:to-navy-700 dark:group-hover:from-blue-400 dark:group-hover:to-blue-500 transition-all duration-300"></div>
              <div className="w-3 h-1 bg-navy-300 dark:bg-slate-500 rounded-full group-hover:bg-navy-400 dark:group-hover:bg-slate-400 transition-all duration-300"></div>
              <div className="w-2 h-1 bg-navy-200 dark:bg-slate-600 rounded-full group-hover:bg-navy-300 dark:group-hover:bg-slate-500 transition-all duration-300"></div>
            </div>
          </div>
        </div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 rounded-xl opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-300" 
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #475569 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;
