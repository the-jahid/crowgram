'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"

// Define the navigation list items
const navlistText = [
    {
      id:1,
      navtitle:'',
      navtitleIcon:'',
      navheaderLinktext:'Crowgram',
      navheaderLinktexticon:'/robot.png',
      pageLink:'/'
    },
    {
      id:2,
      navtitle:'Variables',
      navtitleIcon:'/hammer&wrench.png',
      items:[
        {
          itemstext:'Config Vars',
          itemsicon:'/wrench.png',
          pageLink:'/ConfigVars'
        }
      ]
    },
    {
      id:3,
      navtitle:'Deployment',
      navtitleIcon:'/settings.png',
      items:[
        {
          itemstext:'Deploy to Heroku',
          itemsicon:'/cloud.png',
          pageLink:'/DtoHeroku'
        },
        {
          itemstext:'Deploy to Linux',
          itemsicon:'/penguin.png',
          pageLink:'/DtoLinux'
        },
      ]
    },
]

// Define the NavList component
const NavList = () => {

  const pathname = usePathname()
  

  return (
    <nav className="h-full bg-black py-4 w-full " >
        <ul className="flex flex-col text-white space-y-4 " >
            {/* Map through the navlistText array and create list items */}
            {navlistText.map((item) =>  item.navtitle.length === 0 ? 
            <div key={item.id} className=" cursor-pointer p-1 flex space-x-2 rounded-lg hover:bg-gray-700" >
                <Image src={item.navheaderLinktexticon} width={25} height={20} alt="icon" />
                <Link href={'/'} ><p className={`text-md ${pathname === '/' && 'text-blue-500' }  `} >{item.navheaderLinktext}</p></Link>
            </div> : 
            <div key={item.id}>
                <div className=" p-1 flex space-x-2 rounded-lg " >
                    <Image src={item.navtitleIcon} width={25} height={20} alt="icon" />
                    <p className="text-md" >{item.navtitle}</p>
                </div>
                {/* Map through the items array and create sub list items */}
                {item.items.map((citem, index) => 
                <div  key={index}  className="cursor-pointer p-1 flex space-x-2 rounded-lg hover:bg-gray-700" >
                  <Image src={citem.itemsicon} width={25} height={20} alt="icon" />
                  <Link href={citem.pageLink} ><p className={`text-md ${pathname === citem.pageLink && 'text-blue-500' }  `} >{citem.itemstext}</p></Link>
                </div> )}
            </div> )}
        </ul>
    </nav>
  )
}

export default NavList