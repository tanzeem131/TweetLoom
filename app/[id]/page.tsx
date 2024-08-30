"use client";

import type { NextPage } from "next";
import TweetLoomLayout from "@/components/Layout/TweetloomLayout";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import { useCurrentUser } from "@/hooks/user";
import FeedCard from "@/components/FeedCard";
import { Tweet } from "@/gql/graphql";

const UserProfilePage: NextPage = () => {
  const { user } = useCurrentUser();

  return (
    <div>
      <TweetLoomLayout>
        <div>
          <nav className="flex items-center gap-6 my-1 px-3">
            <div>
              <BsArrowLeftShort className="text-3xl" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Tanzeem</h1>
              <h1 className="text-[13px] text-[#53565A] font-semibold">
                20 Tweets
              </h1>
            </div>
          </nav>
          <div className="p-4 border-b-2 border-gray-600">
            {user?.profileImageUrl && (
              <Image
                src={user?.profileImageUrl}
                alt="user-image"
                className="rounded-full"
                width={100}
                height={100}
              />
            )}
            <h1 className="text-2xl font-bold mt-5">Tanzeem</h1>
          </div>
          <div>
            {user?.tweets?.map((tweet) => (
              <FeedCard data={tweet as Tweet} key={tweet?.id} />
            ))}
          </div>
        </div>
      </TweetLoomLayout>
    </div>
  );
};

export default UserProfilePage;
