import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
	  <nav className = "fixed  z-50  top-0 right-0 left-0 bg-[#121212] pl-16 bg-opacity-50 ">
		  <div className = "flex flex-row justify-between items-center absolute z-30 pt-10 ">
			  <Link href="/">
				  <Image
					  src="./codepace.svg"
					  alt="codepace"
					  priority
					  width={180}
					  height={180}
				  />
			  </Link>
		  </div>
	</nav>
  )
}

export default Navbar