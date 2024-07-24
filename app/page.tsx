'use client';

import React, { useCallback } from "react";
import { BsTwitterX,BsSearch,BsSlashSquare,BsBookmark,BsPeople,BsPerson} from "react-icons/bs";
import { GoBell,GoHomeFill } from "react-icons/go";
import { BiEnvelope } from "react-icons/bi";
import { RiFileListFill } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import FeedCard from "@/components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import {verifyUserGoogleTokenQuery} from "@/graphql/query/user";

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

  const handleLoginWithGoogle = useCallback(async (cred:CredentialResponse)=>{
    
    const googleToken = cred.credential;
   
    if(!googleToken) return toast.error("Google token not found!");
    
    const {verifyGoogleToken} = await graphqlClient.request(verifyUserGoogleTokenQuery,{token: googleToken});
    
    toast.success("Verified Successfully");
    console.log(verifyGoogleToken);

    if(verifyGoogleToken) window.localStorage.setItem("__x_token",verifyGoogleToken);

  },[])

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-72">
        <div className="col-span-3 pl-[50px] pt-8">
          <div className="text-[25px] h-fit w-fit hover:bg-[#181818] rounded-full cursor-pointer p-3 transition-all">
            <BsTwitterX />
          </div>
          <div className="pr-4">
            <ul>
            {sidebarMenuItems.map((item => <li className="w-fit flex justify-start items-center p-3 hover:bg-[#181818] rounded-full gap-4 text-2xl" key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>))}
            </ul>
            <div className="pr-5">
              <button className="bg-[#1D9BF0] mt-6 p-3 font-semibold rounded-full w-full text-lg hover:bg-[#1A8CD8]">Post</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-600 h-screen overflow-scroll scrollbar-hide">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3 px-7 py-3">
            <div className="border-[1px] rounded-2xl border-gray-600 px-4 py-1 w-[350px]">
              <h1 className="my-2 text-xl font-bold">New to X?</h1>
              <p className="my-2 text-[13px] text-[#53565A]">Sign up now to get your own personalized timeline!</p>
              <div className="flex justify-center py-1">
                <GoogleLogin size="large" width={320} logo_alignment="center" shape="pill" onSuccess={handleLoginWithGoogle}/>
              </div>
              <p className="my-2 text-[13px] text-[#53565A]">By signing up, you agree to the <a className="hover:underline text-blue-400">Terms of Service</a> and <a className="hover:underline text-blue-400">Privacy Policy</a>, including <a className="hover:underline text-blue-400">Cookie Use.</a></p>
            </div>
        </div>
      </div>
    </div>
  );
}
