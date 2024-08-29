"use client";

import React, { useCallback, useState } from "react";
import { useCurrentUser } from "@/hooks/user";
import { useCreateTweet, useGetAllTweets } from "@/hooks/tweet";
import TweetLoomLayout from "@/components/Layout/TweetloomLayout";
import Image from "next/image";
import FeedCard from "@/components/FeedCard";
import { Tweet } from "@/gql/graphql";
import { IconContext } from "react-icons";
import { CiImageOn } from "react-icons/ci";

export default function Home() {
  const { user } = useCurrentUser();
  const { tweets } = useGetAllTweets();
  const { mutate } = useCreateTweet();
  const [content, setContent] = useState("");

  const handleSelectImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
  }, []);

  const handleCreateTweet = useCallback(() => {
    mutate({
      content,
    });
  }, [content, mutate]);

  return (
    <div>
      <TweetLoomLayout>
        <div>
          <div className="grid grid-cols-12 gap-4 p-4">
            <div className="col-span-2 sm:col-span-1">
              {user && user.profileImageUrl && (
                <Image
                  className="rounded-full hover:cursor-pointer"
                  src={user.profileImageUrl}
                  alt="user-image"
                  width={50}
                  height={50}
                />
              )}
            </div>
            <div className="col-span-10 sm:col-span-11">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                id="myTextarea"
                placeholder="What is happening?!"
                className="w-full bg-transparent placeholder-opacity-75 px-1 pt-2 placeholder:text-xl  font-light text-xl border-b-[1px] border-gray-600 focus:outline-none overflow-hidden resize-none"
              ></textarea>
              <div className="mt-2 flex justify-between items-center">
                <IconContext.Provider
                  value={{ className: "global-class-BiImageAlt" }}
                >
                  <CiImageOn onClick={handleSelectImage} />
                </IconContext.Provider>
                <button
                  onClick={handleCreateTweet}
                  className="bg-[#0F4E78] text-[#808080] font-semibold text-sm py-2 px-4 rounded-full"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          {tweets?.map((tweet) =>
            tweet ? <FeedCard key={tweet?.id} data={tweet as Tweet} /> : null
          )}
        </div>
      </TweetLoomLayout>
    </div>
  );
}
