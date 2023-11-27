'use client'
import InfoBox from "@/components/InfoBox";
import LogoInfoBox from "@/components/LogoInfoBox";
import PrevNextBox from "@/components/PrevNextBox";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

// Home component
export default function Home() {
    // Divbox component
    const divbox = <span>
        <p>Next-variables</p>
        <p className="text-xl font-semibold" >Config Vars</p>
    </span>
    
  return (
    // Main section
    <main className="w-full min-h-screen flex flex-col space-y-10 justify-center  text-white bg-custom-black p-5  md:p-10 ">
        {/* // Header section */}
        <section className=" space-y-3 " >
            <div className="flex space-x-5 items-center " >
                <Image src={'/robot.png'} width={40} height={30} alt="robot_icon" />
                <h1 className="text-3xl font-semibold" >Crowgram</h1>
            </div>
            <p className="text-xl" >Crowgram is a powerful, advanced, multi-featured Telegram userbot.</p>
        </section>
        {/* // InfoBox component */}
        <InfoBox logoicon={<IoIosInformationCircleOutline size={25} color="#5DADE2"  />} borderleftColor='#5DADE2' text="If you use Crowgram, it is important that you have proper knowledge about it. You should follow the documentation to learn about Crowgram." />
        
        {/* // About Crowgram section */}
        <section className="space-y-5 " id="aboutCrowgram" > 
            <h2 className="text-3xl font-semibold " >About Crowgram</h2>
            <article className="border-l-4 border-gray-200 bg-slate-700 p-4 rounded " >
                <p>Crowgram is an open-source Telegram userbot developed by the Python programming language and Telethon MTProto, a client library of the Telegram API, a secure and reliable way to interact with the Telegram platform.</p>
            </article>
        </section>

        {/* // Deployment section */}
        <section className="space-y-5" id="deployment" >
            <h2 className="text-3xl  font-semibold " >Deployment</h2>
           <LogoInfoBox logo={'/cloud.png'} text='Deploy to Heroku' link='/DtoHeroku'  />
           <LogoInfoBox logo={'/penguin.png'} text='Deploy to Linux' link='/DtoLinux' />
        </section>
        
        {/* // PrevNextBox component */}
        <nav>
            <PrevNextBox icon={<FaArrowRightLong fontSize={20} />}  reverse={false} divbox={divbox} link={'/ConfigVars'}  />
        </nav>
    </main>
  )
}