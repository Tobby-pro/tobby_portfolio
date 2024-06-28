"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Form from './Form'

const Footer = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    console.log("Button clicked"); // Add this line
    navigator.clipboard.writeText("tobbywomiloju@gmail.com")
      .then(() => {
        console.log("Text copied"); // Add this line
        setClicked(true)
      })
      .catch(err => console.error("Failed to copy text: ", err)); // Add this line
  }

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 bottom-0">
        <Image
          src="footer-grid.svg"
          alt="grid"
          width={200}
          height={200}
          className="w-full h-full opacity-70"
        />
      </div>
		  <div className="flex flex-col flex-shrink justify-between lg:flex-row items-center text-bold ">
			  {/* left side */}
			  <div className="flex flex-col "> 
				  <div className = "relative">
        <h1 className="text-left text-[30px] lg:max-w-[45vw]">
          Ready to <span className="text-blue-400">boost your</span> online visibility?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get in touch now, and let&apos;s collaborate on how I can help <br/> you reach your goals and maximize your online potential.
			  </p>
			 
        <MagicButton
          title={clicked ? "Email Copied!" : "Connect with me"}
          icon={<FaLocationArrow />}
          position="right"
          handleClick={handleClick} // Corrected here
				  />
				  </div>
				 
			  </div> 	
			  {/* right side */}
			  <div className = "relative">
					   <Form/>
				  </div>	  
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-neutral-500">
          Copyright © 2024 TobiWomiloju
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blue-lgsaturate-180 text-neutral-400">
              <Image
                src={profile.img}
                alt="profile.id"
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer