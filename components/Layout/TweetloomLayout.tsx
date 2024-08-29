"use client";

import React, { useCallback } from "react";
import {
  BsTwitterX,
  BsSearch,
  BsSlashSquare,
  BsBookmark,
  BsPeople,
  BsPerson,
} from "react-icons/bs";
import { GoBell, GoHome } from "react-icons/go";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { BiEnvelope } from "react-icons/bi";
import { RiFileListLine } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

interface XSideButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: XSideButton[] = [
  {
    title: "Home",
    icon: <GoHome />,
  },
  {
    title: "Explore",
    icon: <BsSearch />,
  },
  {
    title: "Notifications",
    icon: <GoBell />,
  },
  {
    title: "Messages",
    icon: <BiEnvelope />,
  },
  {
    title: "Grok",
    icon: <BsSlashSquare />,
  },
  {
    title: "Lists",
    icon: <RiFileListLine />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Communities",
    icon: <BsPeople />,
  },
  {
    title: "Premium",
    icon: <BsTwitterX />,
  },
  {
    title: "Profile",
    icon: <BsPerson />,
  },
  {
    title: "More",
    icon: <CgMoreO />,
  },
];

interface TweetLoomProps {
  children: React.ReactNode;
}

const TweetLoomLayout: React.FC<TweetLoomProps> = (props) => {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();

  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      try {
        const googleToken = cred.credential;

        if (!googleToken) return toast.error("Google token not found!");

        const { verifyGoogleToken } = await graphqlClient.request(
          verifyUserGoogleTokenQuery,
          { token: googleToken }
        );

        toast.success("Verified Successfully");

        console.log(verifyGoogleToken);

        if (verifyGoogleToken)
          window.localStorage.setItem("__x_token", verifyGoogleToken);

        await queryClient.invalidateQueries({ queryKey: ["current-user"] });
      } catch (error) {
        console.error("Error during Google login:", error);
        toast.error("Google login failed. Please try again.");
      }
    },
    [queryClient]
  );

  return (
    <div className="grid grid-cols-12 h-screen w-screen sm:px-72">
      <div className="col-span-1 sm:col-span-3 flex sm:justify-end pr-4 relative">
        <div>
          {" "}
          <div className="text-2xl sm:text-3xl h-fit w-fit hover:bg-[#181818] rounded-full cursor-pointer p-[8px] sm:p-[12px] transition-all">
            <BsTwitterX />
          </div>
          <div>
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="w-fit cursor-pointer flex sm:justify-start items-center my-[11px] p-[8px] sm:p-[12px] hover:bg-[#181818] rounded-full gap-5"
                  key={item.title}
                >
                  <span className="text-[26px]">{item.icon}</span>
                  <span className="hidden sm:inline text-xl">{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="pr-7">
              <button className="hidden sm:block bg-[#1D9BF0] mt-5 p-[14px] font-semibold rounded-full w-[90%] text-[17px] hover:bg-[#1A8CD8]">
                Post
              </button>
              <button className="block sm:hidden bg-[#1D9BF0] mt-5 p-[8px] sm:p-[14px] font-semibold rounded-full w-fit text-[17px] hover:bg-[#1A8CD8]">
                <BsTwitterX />
              </button>
            </div>
            <div className="absolute bottom-3 p-[2px] sm:p-[12px] cursor-pointer flex gap-3 items-center w-fit rounded-full hover:bg-[#181818]">
              {user && user.profileImageUrl && (
                <Image
                  className="rounded-full"
                  src={user?.profileImageUrl}
                  alt="user-image"
                  height={40}
                  width={40}
                />
              )}
              <div className="hidden sm:block">
                {user && user.firstName && (
                  <p className="text-xl">{user.firstName}</p>
                )}
              </div>
              <div className="hidden sm:block">
                {user && user.firstName && (
                  <div>
                    <PiDotsThreeOutlineFill />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-10 sm:col-span-6 border-r-[1px] border-l-[1px] border-gray-600 h-screen overflow-scroll scrollbar-hide">
        {props.children}
      </div>
      <div className="col-span-3 px-7 py-3">
        {!user && (
          <div className="border-[1px] rounded-2xl border-gray-600 px-4 py-1 w-[350px]">
            <h1 className="my-2 text-xl font-bold">New to X?</h1>
            <p className="my-2 text-[13px] text-[#53565A]">
              Sign up now to get your own personalized timeline!
            </p>
            <div className="flex justify-center py-1">
              <GoogleLogin
                size="large"
                width={320}
                logo_alignment="center"
                shape="pill"
                onSuccess={handleLoginWithGoogle}
              />
            </div>
            <p className="my-2 text-[13px] text-[#53565A]">
              By signing up, you agree to the{" "}
              <a className="hover:underline text-blue-400">Terms of Service</a>{" "}
              and{" "}
              <a className="hover:underline text-blue-400">Privacy Policy</a>,
              including{" "}
              <a className="hover:underline text-blue-400">Cookie Use.</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TweetLoomLayout;
