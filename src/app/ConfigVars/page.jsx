'use client'
// Importing necessary modules and components
import InfoBox from "@/components/InfoBox"
import Image from "next/image"
import { configvartext } from "./configvarsText"
import PrevNextBox from "@/components/PrevNextBox"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

// ConfigVars component
const ConfigVars = () => {

  // Previous section div
  const prevdiv = (
    <section>
      <h2>previous</h2>
      <h2 className="text-xl font-semibold">Crowgram</h2>
    </section>
  )

  // Next section div
  const nextdiv = (
    <section>
      <h2>Next-Deployment</h2>
      <h3 className="text-xl font-semibold">Deploy to Heroku</h3>
    </section>
  )

  // Return the JSX for rendering
  return (
    <main className="w-full min-h-screen flex flex-col justify-center  text-white bg-black p-5  md:p-10 space-y-10  ">
   
        {/* Header section */}
        <section className=" space-y-3 " >
          <div className="flex space-x-5 items-center " >
            <Image src={'/wrench.png'} width={40} height={30} alt="config_icon" />
            <h1 className="text-4xl font-semibold">Config Vars</h1>
          </div>
        </section>

        {/* InfoBox component */}
        <InfoBox logoicon={<IoIosInformationCircleOutline size={25} color="#5DADE2"  />} borderleftColor='#5DADE2' text="Recommend: We request that you fork Crowgram's GitHub repository so your deployed version will be protected." />

        {/* Variables section */}
        <section className="space-y-5" >
          <h2 className="text-3xl font-semibold">Crowgram Variables</h2>
          <p>The variables mentioned below are required to deploy Crowgram. There are some required variables that must be given mandatory values; otherwise, Crowgram will not be able to run.</p>
          <div className="bg-gray-900 p-4 " >
            <p>
              api_id <br />
              api_hash <br />
              string <br />
              bot_token <br />
              assistant_bot <br />
              assistant_api_id <br />
              assistant_api_hash <br />
              assistant_string <br />
              owner <br />
              log_group <br />
              pm_log_location <br />
              mention_log_location <br />
            </p>
          </div>
          <p>It is important to have knowledge about each variable; it will be convenient to run and use Crowgram. Trying to give general knowledge about each variable.</p>
        </section>

        {/* Config variables text section */}
        <section className="space-y-10" >
          {
            configvartext.map((item) => (
              <article key={item.id} className="space-y-3" >
                <h3 className="text-green-600 text-xl font-medium">{item.title} <span className="text-red-500">(required)</span></h3>
                <p>{item.description}</p>
                {item.info}
              </article>
            ))
          }
        </section>

        {/* Optional variables section */}
        <section>
          <h3 className="text-green-600 text-xl font-medium">pm_log_location and mention_log_location <span className="text-orange-500">(optional)</span></h3>
          <p>Here your messages will be logged; if you want, you can put your PM or Mention Logs in the same group; here you have to give the group ID of your message log; if you don't give it, it is not mandatory; if you don't give values to these variables, the message logger will not work.</p>
        </section>

        {/* Navigation section */}
        <nav className="flex  flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 " >
          <PrevNextBox icon={<FaArrowLeftLong fontSize={20} />}  reverse={true} divbox={prevdiv} link={'/ConfigVars'}  />
          <PrevNextBox icon={<FaArrowRightLong fontSize={20} />}  reverse={false} divbox={nextdiv} link={'/DtoHeroku'}  />
        </nav>
    </main>
  )
}

// Exporting the ConfigVars component
export default ConfigVars