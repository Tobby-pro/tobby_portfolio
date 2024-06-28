import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
import Image from 'next/image'

const Experience = () => {
  return (
	  <div>
		  <h1 className="text-center text-[30px] md:text-5xl lg:text-5xl">
        My <span className="text-blue-400">Work Experience</span>
		  </h1>
		  <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
			  {workExperience.map((card) => (
				  <Button className = "flex-1 text-white"
					  key={card.id}
					  duration= {Math.floor(Math.random()* 18000)}
				  		>
					  <div className = "flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 gap-2 lg:p-10">
						  <Image
							  src={card.thumbnail}
							  alt={card.thumbnail}
							  width={50}
							  height={50}
							  className="lg:w-32 md:w-20 w-16 " />
						  <div className="lg:ms-5">
							  <h1 className="text-start text-xl md:text-2xl font-bold">
								  {card.title}
							  </h1>
							  <p className="text-start text-white-100 mt-3 font-semibold">
								  {card.desc}
							  </p>
							  
						  </div>
					  </div>
				  </Button>
			  ))}
			  
		  </div>
	</div>
  )
}

export default Experience