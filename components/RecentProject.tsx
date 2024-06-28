import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3D-pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const RecentProject = () => {
  return (
    <div className="py-20 relative" id = "projects" >
      <h1 className="text-center text-[30px] md:text-5xl lg:text-5xl">
        A small collection of <span className="text-blue-400">latest projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] sm:w-[570px] h-[32rem] sm:h-[41rem] flex items-center justify-center w-[80vw]"
          >
            <PinContainer title={title} href={link}>
					<div className="relative flex items-center justify-center sm:w-[570px] w-[90vw] overflow-hidden h-[30vh] lg:h-[40vh] border border-dotted border-blue-500 rounded-xl ">
						
                <div className="relative w-full h-auto overflow-hidden lg:rounded-3xl bg-[13162d]">
                  <Image
                    src="/bg.png" // Correct path
                    alt="bg-img"
                    width={0}
                    height={0}
                    className="z-10 absolute bottom-0"
                  />
                </div> 
                <Image
                  src={img} // Correct path
                  alt={title}
                  width={500}
                  height={500}
                  className="z-10 absolute bottom-0"
                />
					</div>
					<h1 className = "font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
						{title}
					</h1>
					<p className = "lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
						{des}
					</p>
					<div className="flex items-center justify-between mt-7 mb-3">
						<div className="flex items-center">
							{iconLists.map((icon, index) => (
								<div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
									style={{
									transform: `translateX(-${5 * index * 2 }px)`
									}}>
									<div>
									<Image
										src={icon}
										alt={icon}
										width={200}
										height={200}
									className ="p-2"/>
										</div>
								</div>

							))}
						</div>
						<div className=" flex justify-center items-center">
							<p className = "flex lg:text-xl md:text-xs text-sm text-purple">
								View Live Site
							</p>
							<FaLocationArrow className="ms-3"
							color = "CBACF9"/>
						</div>

					</div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;