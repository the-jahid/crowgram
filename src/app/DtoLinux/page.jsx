// Importing necessary components and libraries
import InfoBox from "@/components/InfoBox"
import MiniInfoBox from "@/components/MiniInfoBox"
import PrevNextBox from "@/components/PrevNextBox"
import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6"
import { IoIosInformationCircleOutline } from "react-icons/io";

// Main component for the DeployToLinux page
const DeployToLinux = () => {

  
  // Divbox for the PrevNextBox component
  const divbox = <span>
    <p>Next-variables</p>
    <p className="text-xl font-semibold" >Config Vars</p>
  </span>


    // Render the DeployToLinux page
  return (
    <main className="w-full min-h-screen flex flex-col justify-center  text-white bg-black p-5  md:p-10 space-y-10">
      {/* // Section for the page title */}
        <section className=" space-y-3 " >
          <div className="flex space-x-5 " >
            <Image src={'/penguin.png'} width={40} height={25} alt="penguin_icon" />
            <p className="text-3xl font-semibold" >Deploy to Linux</p>
          </div>
        </section>

        {/* // InfoBox component with a recommendation message */}

        <InfoBox logoicon={<IoIosInformationCircleOutline size={25} color="#5DADE2" />} borderleftColor='#5DADE2' text="Recommend: We request that you fork Crowgram's GitHub repository so your deployed version will be protected." />

       {/* Main content of the page */}
        <section className="space-y-5" >
           {/* Prerequisites section */}

       <div className="space-y-5" >
          <p className="text-3xl font-semibold " >Prerequisites</p>
          <p>To deploy Crowgram, it is necessary to know about the variables mentioned below. Detailed information about these variables is available in the variables section.</p>

          <div className="bg-gray-900 p-4">
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
       </div>

           {/* Automatic Process section */}
          <section className="space-y-5 " >
            <p className="text-3xl font-semibold " >Automatic Process</p>
            <p>The easiest and our recommended process to install Crowgram is to run the following command in your Linux terminal in your desired directory.</p>

            <section className="bg-gray-900 p-4 w-full ">
              <p className="break-all">
                <code>
                  {"curl -s https://raw.githubusercontent.com/iniridwanul/Crowgram/master/crowgram.sh > install.sh && bash install.sh && rm install.sh"}
                </code>
              </p>
            </section>

            <p>It'll automatically clone the git repository, and will ask you for your variables and do the rest. Here the only dependences for running this command are wget, git and your Linux shell itself!</p>
            <p>For again running the Crowgram, simply run the crowgram.sh script inside the git repository.</p>
            <MiniInfoBox text="bash crowgram.sh" />

          </section>
          {/* Manual Process section */}
          <section className="space-y-10" >
            <p className="text-3xl font-semibold " >Manual Process</p>
            <p>Follow these steps to manually deploy Crowgram.</p>
            <article  className="space-y-3" >
              <p className="text-green-500 font-semibold text-xl" > Clone the Crowgram Repository</p>
              <p>Open your terminal and run the following command to clone the Crowgram repository:</p>
              <MiniInfoBox text="git clone https://github.com/your_username/Crowgram.git" />
              <InfoBox logoicon={<IoIosInformationCircleOutline size={25} color="#5DADE2" />} borderleftColor='#5DADE2' text="In your_username, you have to give your GitHub username." />
            </article >

            <article className="space-y-3 " >
              <p className="text-green-500 font-semibold text-xl " > Navigate to the Crowgram Directory</p>
              <p>Change your current directory to the Crowgram folder:</p>
              <MiniInfoBox text="cd Crowgram" />
            </article>

            <div className="space-y-3" >
              <p className="text-green-500 font-semibold text-xl " > Navigate to the Crowgram Directory</p>
              <p>Export the environment variables using the values you gathered in the prerequisites step. You can set them in the <span className="bg-gray-500 rounded-md mr-2 ">.env  </span> file provided with the repository:</p>
              <div className="bg-gray-900 p-4" >
                <p >
                  <code className="break-all space-y-2 " >
                    {"echo \"api_id=YOUR_API_ID\" >> .env"}<br />
                    {"echo \"api_hash=YOUR_API_HASH\" >> .env"}<br />
                    {"echo \"string=YOUR_SESSION_STRING\" >> .env"}<br />
                    {"echo \"bot_token=YOUR_BOT_TOKEN\" >> .env"}<br />
                    {"echo \"assistant_bot=YOUR_ASSISTANT_BOT\" >> .env"}<br />
                    {"echo \"assistant_api_id=ASSISTANT_API_ID\" >> .env"}<br />
                    {"echo \"assistant_api_hash=ASSISTANT_API_HASH\" >> .env"}<br />
                    {"echo \"assistant_string=ASSISTANT_SESSION_STRING\" >> .env"}<br />
                    {"echo \"owner=YOUR_TELEGRAM_USER_ID\" >> .env"}<br />
                    {"echo \"log_group=YOUR_LOG_GROUP_ID\" >> .env"}<br />
                    {"echo \"pm_log_location=YOUR_PM_LOG_LOCATION\" >> .env"}<br />
                    {"echo \"mention_log_location=YOUR_MENTION_LOG_LOCATION\" >> .env"}
                  </code>
                </p>
              </div>
            </div>

            <article className="space-y-3" >
              <p className="text-green-500 font-semibold text-xl " > Install Dependencies and start Crowgram</p>
              <p>Run the following command to install the required dependencies and start your own Crowgram:</p>
              <MiniInfoBox text="bash crowgram.sh" />
              <p>Crowgram will initialize and connect to Telegram.</p>
              <InfoBox logoicon={<IoIosInformationCircleOutline size={25} color="#F4D03F "  />} borderleftColor='#F4D03F ' text="After deploying Crowgram, the >sethelper command must be given in any chat, or the Help Menu will not work." />
            </article>

            {/* Conclusion section */}
            <section className="space-y-3" >
              <p className="text-green-500 font-semibold text-xl " >Conclusion</p>
              <p>You have successfully installed Crowgram on your Linux machine. Enjoy the enhanced Telegram experience provided by this userbot. If you encounter any issues or have questions, please refer to the Crowgram GitHub repository or reach out to the developer community for assistance.</p>
            </section>
          </section>

        </section>

        <PrevNextBox icon={<FaArrowRightLong fontSize={20} />} reverse={false} divbox={divbox} link={'/ConfigVars'} />

    </main>
  )
}

export default DeployToLinux