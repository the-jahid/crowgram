'use client'
import Image from "next/image"
import Link from "next/link"

const LogoInfoBox = ({logo, text, link}) => {
  return (
<Link href={link} className="p-4 border border-white flex rounded space-x-4 cursor-pointer group transform hover:-translate-y-2 hover:shadow-lg hover:text-blue-500 transition-all duration-500" >

    <Image src={logo} width={24} height={24} alt="img" />
    <p>{text}</p>

</Link>
  )
}

export default LogoInfoBox