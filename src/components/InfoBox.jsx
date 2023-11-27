'use client'

import Image from "next/image"

const InfoBox = ({logoicon, text, borderleftColor}) => {

  

  return (
    <div className=" border-l-4 flex items-start p-4 bg-slate-700 space-x-4 rounded" style={{borderColor: borderleftColor}}>
    <div className="width-[20px] height-[20px]">
        {logoicon}
    </div>
    <p className="font-medium" >{text}</p>
</div>
  )
}

export default InfoBox