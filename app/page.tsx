import React from "react";
import { BsTwitterX,BsSearch,BsSlashSquare,BsBookmark,BsPeople,BsPerson} from "react-icons/bs";
import { GoBell,GoHomeFill } from "react-icons/go";
import { BiEnvelope } from "react-icons/bi";
import { RiFileListFill } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import FeedCard from "@/components/FeedCard";


interface XSideButton{
  title:string;
  icon: React.ReactNode;
}

const sidebarMenuItems: XSideButton[]=[
  {
    title: 'Home',
    icon: <GoHomeFill />
  },
  {
    title: 'Explore',
    icon: <BsSearch />
  },
  {
    title: 'Notifications',
    icon: <GoBell />
  },
  {
    title: 'Messages',
    icon: <BiEnvelope />
  },
  {
    title: 'Grok',
    icon: <BsSlashSquare />
  },
  {
    title: 'Lists',
    icon: <RiFileListFill />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />
  }, 
  {
    title: 'Communities',
    icon: <BsPeople />
  },
  {
    title: 'Premium',
    icon: <BsTwitterX />
  },
  {
    title: 'Profile',
    icon: <BsPerson />
  },
  {
    title: 'More',
    icon: <CgMoreO />
  }
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-72">
        <div className="col-span-3 pl-[50px] pt-8">
          <div className="text-[25px] h-fit w-fit hover:bg-gray-800 rounded-full cursor-pointer p-3 transition-all">
            <BsTwitterX />
          </div>
          <div className="pr-4">
            <ul>
            {sidebarMenuItems.map((item => <li className="w-fit flex justify-start items-center p-3 hover:bg-gray-800 rounded-full gap-4 text-2xl" key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>))}
            </ul>
            <div className="pr-5">
              <button className="bg-[#1A8CD8] mt-6 p-3 font-semibold rounded-full w-full text-lg">Post</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600 h-screen overflow-scroll scrollbar-hide">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
