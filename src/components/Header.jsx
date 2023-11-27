// Client-side code
'use client'

// Importing necessary libraries and components
import Image from "next/image"
import SideBar from "./Sidebar"
import { useState } from "react"
import { FaAlignLeft } from "react-icons/fa6";


// Header component
const Header = () => {

 // State for managing the sidebar open/close status
 const [opensideBar, setSideBar] = useState(false)

  return (
   // Header element with styling and structure
   <header className="z-30 flex  fixed top-0 bg-custom-black h-[10vh] text-white  p-5 items-center border-b border-b-gray-100 w-full">
        {/* // Navigation section */}
        <nav className="flex items-center space-x-3">
            {/* // Button to toggle sidebar */}
            <button onClick={() => setSideBar(!opensideBar)} className="sm:block md:hidden cursor-pointer">
                <FaAlignLeft width={24} height={24} />
            </button>
            {/* // Logo section */}
            <div className="bg-gray-100 rounded-md w-[40px] h-[40px] ">
                <Image src={'/crowgram_logo.png'} className="rounded" width={40} height={40} alt="crowgram_logo" />
            </div>
            {/* // Site title */}
            <h1 className="font-bold sm:text-xl md:text-2xl">Crowgram</h1>
        </nav>

       {/* // Sidebar component */}
       <SideBar opensideBar={opensideBar} setSideBar={setSideBar} />
       
   </header>
  )
}

// Exporting the Header component
export default Header