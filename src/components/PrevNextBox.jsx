'use client'
import Link from "next/link"


const PrevNextBox = ({ divbox, icon, reverse=false, link}) => {
  return (

  <Link href={link} className={`border border-white w-full p-2 px-4 rounded flex justify-between ${reverse ? 'flex-row' : 'flex-row-reverse'} cursor-pointer items-center hover:text-blue-500 transition-all duration-500 hover:-translate-y-2`}>
    <div>
        {icon}
    </div>
    <div>
       {divbox}
    </div>
</Link>
  )
}

export default PrevNextBox