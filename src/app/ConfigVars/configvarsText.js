import InfoBox from "@/components/InfoBox";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsExclamationTriangle } from "react-icons/bs";

export const configvartext = [
    {
        id:1,
        title:`api_id and api_hash`,
        description:'The api_id and api_hash are those of the developer. But since you deploy Crowgram yourself, it is your api_id and api_hash that you must provide.',
        info: <InfoBox logoicon={<BsExclamationTriangle size={25} color="#E74C3C "  />} borderleftColor='#E74C3C ' text="Collect this value from my.telegram.org and do not share it with anyone." />
    },
    {
        id:2,
        title:`string`,
        description:'Strings are a convenient way to embed your login credentials directly into Crowgram code for easy portability, since all it takes is a string to be able to login without asking for your phone or code.',
        info: <InfoBox logoicon={<BsExclamationTriangle size={25} color="#E74C3C "  />} borderleftColor='#E74C3C ' text="Collect this value by running python3 string_session.py, and never accidentally share it with anyone." />
    },
    {
        id:3,
        title:`bot_token`,
        description:"A token is a string or line containing letters and numbers needed to authorize the bot and send requests to the bot API. Crowgram's Help plugin works through this bot token.",
        info: <InfoBox logoicon={<BsExclamationTriangle size={25} color="#E74C3C "  />} borderleftColor='#E74C3C ' text="Collect the assistant bot's token from @BotFather and don't accidentally share it with anyone." />
    },
    {
        id:4,
        title:`assistant_bot`,
        description:"In Assistant Bot, you need to give your assistant bot username, with @ of course. This is how Crowgram's Help plugin works.",
        info:null
    },
    {
        id:5,
        title:`assistant_api_id and assistant_api_hash`,
        description:"You have to provide the api_id and api_hash of your Assistant account. The api_id and api_hash are those of the developer. But since you deploy Crowgram yourself, it is your api_id and api_hash that you must provide.",
        info:<InfoBox logoicon={<BsExclamationTriangle size={25} color="#E74C3C "  />} borderleftColor='#E74C3C ' text="Collect this value from my.telegram.org and do not share it with anyone." />
    },
    {
        id:6,
        title:`assistant_string`,
        description:"Here, you have to provide the session string of your assistant account. Strings are a convenient way to embed your login credentials directly into Crowgram code for easy portability, since all it takes is a string to be able to login without asking for your phone or code.",
        info:<InfoBox logoicon={<BsExclamationTriangle size={25} color="#E74C3C "  />} borderleftColor='#E74C3C ' text="Collect this value by running python3 string_session.py, and never accidentally share it with anyone." />
    },
    {
        id:7,
        title:`owner`,
        description:"Here you have to give the user ID of your Telegram account; through this, the owner account is known on Crowgram, and the owner account is given special privileges and protected from other people's requests.",
        info:null
    },
    {
        id:8,
        title:`log_group`,
        description:'Here you have to give the group ID of your Crowgram logs group. It is very important; if Crowgram runs successfully, this log group will be notified with a message.',
        info:null
    },
]