import React from "react";
import Image from "next/image";
import {BsChat,BsBookmark} from 'react-icons/bs'
import { IoIosStats } from "react-icons/io";
import { RiShare2Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { FaRetweet,FaRegHeart  } from "react-icons/fa6";


const FeedCard: React.FC = ()=>{
    return (
    <div className="border border-r-0 border-l-0 border-t-0 border-gray-600 border-b-[1px] pt-3 pr-4 pl-4">
        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <Image className="rounded-full" src={'https://pbs.twimg.com/profile_images/1800082340405764096/GROpyGGE_400x400.jpg'} alt="user-img" height={50} width={50}/>
            </div>
            <div className="col-span-11">
                <div className="flex justify-between items-start">
                <h5 className="pl-2 font-semibold">Tanzeem</h5>
                <IconContext.Provider value={{className: "global-class-IoIosMore" }}>
                    <div>
                        <PiDotsThreeOutlineFill />
                    </div>
                </IconContext.Provider>
                </div>
                <p className="px-2 -mt-3">🎉Excited to share that I just completed my Google Analytics certification! 📈✨Implemented it on my portfolio website for enhanced insights and optimization. Ready to dive deeper into #DataDriven decisions!🚀#GoogleAnalytics #WebAnalytics #connect #developer #web3 #opentowork</p>
                <div className="px-2 py-1">
                    <Image className="rounded-lg" src={'https://pbs.twimg.com/media/GP4W0AHW8AAsZnO?format=jpg&name=medium'} alt="user-img" height={400} width={600}/>
                </div>
                <div className="flex justify-between items-center text-lg pb-1">
                    <IconContext.Provider value={{className: "global-class-BsChat" }}>
                        <div >
                            <BsChat/>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{className: "global-class-AiOutlineRetweet" }}>
                        <div className="text-[22px]">
                            <FaRetweet/>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{className: "global-class-BsHeart" }}>
                        <div className="text-[20px]">
                            <FaRegHeart />
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{className: "global-class-IoIosStats" }}>
                        <div>
                            <IoIosStats/>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{className: "global-class-twobtn" }}>
                        <div className="flex gap-0">
                            <div>
                                <BsBookmark/>
                            </div>
                            <div>
                                <RiShare2Line/>
                            </div>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FeedCard;