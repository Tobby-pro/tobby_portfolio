"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

export function MyProcess() {
  return (
	  <section className="w-full py-20">
		  
		  <h1 className="text-center text-[30px] md:text-5xl lg:text-5xl">
        My <span className="text-blue-400">Approach</span>
		  </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center  w-full gap-4 mx-auto px-8">
			  <Card title="Discovery & Planning"
				  icon={<AceternityIcon order="phase 1" />} description="In this initial phase, I prioritize understanding your unique vision and goals. We begin with a thorough consultation to discuss your project's objectives, target audience, and desired outcomes. Through detailed research and strategic planning, I ensure that every aspect of your project aligns with your vision. This phase lays the foundation for an, effective, successful and tailored project.">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
			  <Card
				  title="Design & Development" icon={<AceternityIcon order="phase 2" />}
				  description = "This is where i bring the Ideas to Life I craft visually stunning designs that are not only aesthetically pleasing but also user-friendly. Using the latest technologies and best practices, I develop a robust, responsive, and high-performing website or application that meets your needs. Collaboration and feedback are crucial in this phase to ensure the end product exceeds your expectations."
			  >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
			  <Card title=" Optimization & Launch"
				  icon={<AceternityIcon order="phase 3"/>}
				  description= "This phase is the final one. focuses on launching your project with optimizing and precision for continuous improvement. I thoroughly test every aspect of the website or application to ensure a flawless user experience. After a successful launch, I provide ongoing support and optimization services to keep your project running smoothly and effectively. Your satisfaction and the project's success are my top priorities." 
			  >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
	children,
  description
}: {
  title: string;
  icon: React.ReactNode;
		children?: React.ReactNode;
  description: string
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:eh-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 ">
        <div className="text-center  group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
			  </h2>
			  <h2 className=" text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center " style = {{color:'#e4ecff'}}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}: {order: string}) => {
  return (
    
	  <div className = "rounded-2xl">
		  
		   
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {order}
        </button>
  
      
      
	  </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default MyProcess