import React from "react";
import Image from "next/image";
import { IoIosStats } from "react-icons/io";
import { RiShare2Line, RiChat1Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { FaRetweet } from "react-icons/fa6";
import { GoBookmark, GoHeart } from "react-icons/go";
import { Tweet } from "@/gql/graphql";

interface FeedCardProps {
  data: Tweet;
}
const FeedCard: React.FC<FeedCardProps> = (props) => {
  const { data } = props;
  return (
    <div className="border border-r-0 border-l-0 border-t-0 border-gray-600 border-b-[1px] cursor-pointer pt-3 pr-4 pl-4">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          {data?.author?.profileImageUrl && (
            <Image
              className="rounded-full"
              src={data.author.profileImageUrl}
              alt="user-img"
              height={40}
              width={40}
            />
          )}
        </div>
        <div className="col-span-11">
          {data?.author?.firstName && (
            <div className="flex justify-between">
              <h5 className="pl-2 font-semibold">
                {data?.author?.firstName} {data?.author?.lastName}
              </h5>
              <IconContext.Provider
                value={{ className: "global-class-PiDotsThreeOutlineFill" }}
              >
                <div className="flex items-center -mt-[4px]">
                  <PiDotsThreeOutlineFill />
                </div>
              </IconContext.Provider>
            </div>
          )}
          <div className="px-2 -mt-3">
            <p>{data?.content}</p>
          </div>
          <div className="px-2 py-1">
            {data.imageURL && (
              <Image
                className="rounded-lg"
                src={data.imageURL}
                priority={false}
                alt="user-img"
                height={400}
                width={600}
              />
            )}
          </div>
          <div className="flex justify-between items-center text-lg pb-1">
            <IconContext.Provider
              value={{ className: "global-class-RiChat1Line" }}
            >
              <div>
                <RiChat1Line />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: "global-class-FaRetweet" }}
            >
              <div>
                <FaRetweet />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "global-class-GoHeart" }}>
              <div>
                <GoHeart />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: "global-class-IoIosStats" }}
            >
              <div>
                <IoIosStats />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "global-class-twobtn" }}>
              <div className="flex gap-0">
                <div>
                  <GoBookmark />
                </div>
                <div>
                  <RiShare2Line />
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
