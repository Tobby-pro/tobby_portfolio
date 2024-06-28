import Image from "next/image";
import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProject from "@/components/RecentProject";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import MyProcess from "@/components/MyProcess";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const runtime = "edge"
export default function Home() {
  return (
    <main className="relative bg-black-100 flex min-h-screen flex-col items-center justify-center mx-auto sm:px-10 px-5 overflow-clip ">
		  <div className=" max-w-7xl w-full ">
			 
			  <FloatingNav navItems={ navItems}
			  />
			   <Navbar/>
			  <Hero />
			  <Grid />
			  <RecentProject />
			  <Experience />
			  <MyProcess />
			  <Footer/>
			  
			  
	 </div>  
    </main>
  );
}
