'use client'
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import  GlobeDemo  from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import  animationData from '@/data/confetti.json' 
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg
 
}: { 
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  titleClassName?: string;
  spareImg?: string
  imgClassName?: string  
	}) => {
	const [copied, setCopied] = useState(false);
	
	const handleCopy = () => {
		console.log("Button clicked"); // Debug log to check if the button was clicked
		navigator.clipboard.writeText('tobbywomiloju@gmail.com')
		  .then(() => {
			setCopied(true);
			console.log("Copied state set to true"); // Debug log to check if state was updated
		  })
		  .catch(err => {
			console.error("Failed to copy: ", err);
		  });
	  };
	return (
	  
    <div
      className={cn(
        "row-span-1 relative flex flex-col justify-between overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] space-y-4",
        className
		  )}  
		  style={{
			background: 'rgb(4,7,39)',
			backgroundColor: 'linear-gradient(90deg, rgba(4,7,291,1) 39%, rgba(6,70,170,1) 60%, rgba(0,121,255,0.9) 100%)'
		  }}
	  >
		  <div className={`${id === 6 && 'flex justify-center'} h-full`}>
			  <div className="w-full h-full absolute">
				  {img && (<Image
					  src={img}
						alt={img}
						priority
						width={0}
						height={0}
					  className={cn(imgClassName, 'object-cover, object-center ')} />
				  )} 
			  </div>
			  <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
				  {spareImg && (
					  <Image
						  src={spareImg}
							alt={spareImg}
							width={0}
							height={0}
							priority
						  className={'object-cover, object-center w-full h-full'}
					  />
				  )}
				  
			  </div>
			  {id === 6 && (
				  <BackgroundGradientAnimation>
					  <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"/>
				  </BackgroundGradientAnimation>
				  
			  )}
			  <div className={cn(
				  titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 '
			  )}>
				  <div className="font-sans font-bold text-lg max-w-96 z-30 lg:text-3xl text-blue-100">
          			  {title}
        </div>
				  <div className = "left-10 font-sans font-extralight text-[#c1c2d3] text-sm lg:text-base z-10">
					  {description}
				  </div>
			  
			  {id === 3 && <GlobeDemo/>}
			  
			  {id === 2 && (
				  <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
						  <div className="flex flex-col gap-3 lg:gap-8">
						  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E"/>
						  {['React.js', 'TypeScript', 'Nuxt.js', 'CSS'].map((item) => (
							  <span key={item} className = "py-2 lg:px-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-4/0 rounded-lg text-center bg-[#10132e]">
								  {item} 
							  </span>
							  
						  ))}
							 
								  
							
						  </div>
						  <div className="flex flex-col gap-3 lg:gap-8">
							  
						  {[ 'Javascript', 'React.js', 'Tailwind CSS'].map((item) => (
							  <span key={item} className = "py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-40 lg:opacity-40 rounded-lg text-center bg-[#10132E]"> 
								  {item}
							  </span>
							  
						  ))}
							  <span className="py-4 px-3 rounded-lg text-center bg-[#10132e"/>
						  	                                                                                                        			</div>
				  </div>
				  )}

				  {id === 6 && (
					  <div className='mt-5 relative '>
						  <div className={`absolute -bottom-5 right-0`}>
							  {/* <Lottie options={{
									loop: copied,
									autoplay: copied,
									animationData,
									rendererSettings: {
										preserveAspectRatio: 'xMidYMid slice',
									}
								   
							  }} /> */}
								
							  
							</div>
			<MagicButton
            title={copied ? 'Copied' : 'Copy my email'}
            icon={<IoCopyOutline />}
            position='left'
            otherClasses='!bg-[#161a31]'
								handleClick={handleCopy}
							
          />
						  
					  </div>
				  )}
				  
			  </div>
		  </div>
      </div>
  );
};
