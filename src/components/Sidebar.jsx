'use client'
import NavList from "./NavList";

const SideBar = ({opensideBar, setSideBar}) => {

  
  return (
    <div className={` px-4  z-20 absolute top-0 ${opensideBar ? 'left-0' : '-left-2/3'} w-2/3 h-screen bg-custom-black transition-all duration-5000 ease-in-out`}>
    <div className="pl-7 mt-4" >
        <p onClick={() => setSideBar(false)} className="text-xl cursor-pointer">x</p>
    </div>
    <NavList />
    </div>
  )
}

export default SideBar;






