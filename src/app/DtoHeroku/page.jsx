'use client'

// Importing required components and icons
import InfoBox from "@/components/InfoBox";
import PrevNextBox from "@/components/PrevNextBox";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

// DeployToHeroku component
const DeployToHeroku = () => {

  // Previous section
  const prevdiv = (
    <section>
      <h2>Previous</h2>
      <h3 className="text-lg font-semibold">Config Vars</h3>
    </section>
  )

  // Next section
  const nextdiv = (
    <section>
      <h2>Next-Deployment</h2>
      <h3 className="text-lg font-semibold">Deploy to Linux</h3>
    </section>
  )

  // Component return
  return (
    <main className="w-full min-h-screen flex flex-col justify-center  text-white bg-black p-5  md:p-10 space-y-10   ">
     
        <section className=" space-y-3 " >
          <div className="flex space-x-5 " >
            <Image src={'/cloud.png'} width={40} height={30} />
            <p className="text-4xl font-semibold" >Deploy to Heroku</p>
          </div>
        </section>

        {/* // InfoBox component with props */}
        <InfoBox logoicon={<IoIosInformationCircleOutline size={25} color="#5DADE2"  />} borderleftColor='#5DADE2' text="Recommend: We request that you fork Crowgram's GitHub repository so your deployed version will be protected." />

        {/* // Heroku information section */}
        <section className="space-y-3" >
          <p className="text-3xl font-semibold" >What is Heroku?</p>
          <p>It is better to get familiar with Heroku first. Heroku is a platform based on a managed container system, integrated data services, and a robust ecosystem for deploying and running modern apps. Heroku is generally easy to use and well documented, which means you won't need to struggle to deploy Crowgram.</p>
        </section>

        {/* // Deployment section */}
        <section className="space-y-5" >
          <p className="text-3xl font-semibold " >Deployment</p>
          <p>To deploy Crowgram, it is necessary to know about the variables mentioned below. Detailed information about these variables is available in the variables section.</p>
          <div className="bg-gray-900 p-4 " >
           
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
           
          </div>
          <p>While deploying Crowgram on Heroku, you can know the required variables in Config Vars; without the required variables, Crowgram will not work properly and will not be deployed on Heroku.</p>
          <p className="text-lg  font-semibold " >To deploy Crowgram on Heroku using the Deploy to Heroku button, follow these steps:</p>
          <ol className="space-y-2" >
            <li>1. Click on the "Deploy to Heroku" button in the Crowgram repository on GitHub.</li>
            <li>2. Click on the "Deploy app" button to deploy Crowgram to Heroku.</li>
            <li>3. Click on the "Deploy app" button to deploy Crowgram to Heroku.</li>
            <li>4. Once the deployment is complete, you need to click on the Manage App button.</li>
            <li>5. By default, you'll be taken to the deployed application's Overview tab. Click on the Resources tab to be taken to the resources section of your application, click the button with the pencil icon, click the toggle so that it is set to the right, and click the Confirm button.</li>
           
          </ol>
        </section>

        {/* // More InfoBox components with props */}
        <InfoBox logoicon={<CiCircleCheck size={25} color="#239B56 "  />} borderleftColor='#239B56 ' text="Recommend: We request that you fork Crowgram's GitHub repository so your deployed version will be protected." />

        <InfoBox logoicon={<IoIosInformationCircleOutline size={25} color="#F4D03F "  />} borderleftColor='#F4D03F ' text="Recommend: We request that you fork Crowgram's GitHub repository so your deployed version will be protected." />

        <p>Congratulations! You have successfully deployed Crowgram to Heroku using the Deploy to Heroku button.</p>

        {/* // Navigation section with PrevNextBox components */}
        <nav className="flex  flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 " >
          <PrevNextBox icon={<FaArrowLeftLong fontSize={20} />}  reverse={true} divbox={prevdiv} link={'/ConfigVars'}  />
          <PrevNextBox icon={<FaArrowRightLong fontSize={20} />}  reverse={false} divbox={nextdiv} link={'/DtoLinux'}  />
        </nav>
    </main>
  )
}

// Exporting the component
export default DeployToHeroku;