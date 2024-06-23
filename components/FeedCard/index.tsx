import React from "react";
import Image from "next/image";
import {BsChat,BsHeart,BsBookmark} from 'react-icons/bs'
import { AiOutlineRetweet } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { RiShare2Line } from "react-icons/ri";


const FeedCard: React.FC = ()=>{
    return (
    <div className="border border-r-0 border-l-0 border-t-0 border-gray-600 border-b-[1px] p-4" >
        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <Image className="rounded-full" src={'https://pbs.twimg.com/profile_images/1800082340405764096/GROpyGGE_400x400.jpg'} alt="user-img" height={50} width={50}/>
            </div>
            <div className="col-span-11">
                <h5>Tanzeem</h5>
                <p className="text-justify">🎉Excited to share that I just completed my Google Analytics certification! 📈✨Implemented it on my portfolio website for enhanced insights and optimization. Ready to dive deeper into #DataDriven decisions!🚀#GoogleAnalytics #WebAnalytics #connect #developer #web3 #opentowork</p>
                <div>
                    <Image className="rounded-lg" src={'https://pbs.twimg.com/profile_images/1800082340405764096/GROpyGGE_400x400.jpg'} alt="user-img" height={500} width={600}/>
                </div>
                <div className="flex justify-between pt-4 items-center text-lg cursor-pointer">
                    <div className="hover:text-white hover:textshadow hover:boxshadow">
                        <BsChat/>
                    </div>
                    <div className="hover:text-white hover:textshadow hover:boxshadow">
                        <AiOutlineRetweet />
                    </div>
                    <div className="hover:text-white hover:textshadow hover:boxshadow">
                        <BsHeart/>
                    </div>
                    <div className="hover:text-white hover:textshadow hover:boxshadow">
                        <IoIosStats />
                    </div>
                    <div className="flex gap-2 ">
                        <BsBookmark className="hover:text-white hover:textshadow hover:boxshadow"/>
                        <RiShare2Line />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FeedCard;