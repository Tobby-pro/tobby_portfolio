"use client"
import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { FaLocationArrow } from 'react-icons/fa'
import {TypeAnimation} from "react-type-animation"

 const Hero = () => {
	 return (
	   <div className = "pb-20 pt-36">
			 <div>
				 <Spotlight className="-top-40 -left-10 h-screen md:-top-20 md:-left-32 " fill="white" />
				 <Spotlight className="top-10 left-full h-[80vh] w-[50vw] " fill="purple" />
				 <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
				 
			 </div>
			 
    <div className="h-screen w-full dark:bg-black-100  bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] flex items-center justify-center absolute  top-0 left-0  ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      
		</div>
			 <div className="flex justify-center relative my-20 Z-10">
				 <div className = "max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
					 <h2 className = 'uppercase text-xs text-center text-blue-100 max-w-80 lg:max-w-[40rem]' >
					 Unveiling my Dynamic Web Magic with  next-js
					 </h2>
					 
					 <TextGenerateEffect
						 className="text-center text-[40px] md:text-5xl lg:text-6xl"
						 words="Molding Ideas into Seamless User Experience "
					 />
					 <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						 <span> Hey, I&apos;m  
							  {" "}
						 </span>
						 <TypeAnimation
      sequence={[
        'Tobi Womiloju,',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a React-js/React-Native Developer',
        1000,
        'a UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
		Based in Nigeria.
					 </p>

					 <a href="#about">
						 <MagicButton
							 title="Discover My Portfolio"
							 icon={<FaLocationArrow />}
							 position = 'right'
						 />
					 </a>
				 </div>
			 </div>
   

	</div>
   )
 }
 
 export default Hero