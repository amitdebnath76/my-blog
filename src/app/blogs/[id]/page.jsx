"use client";
import React, { useEffect, useState } from "react";
import { blog_data } from "../../../../Assets/assets";
import Image from "next/image";
import { assets } from "./../../../../Assets/assets";

const page = ({ params }) => {
  const [data, setData] = useState(null);
  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) == blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };
  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Image
            src={assets.logo}
            alt=""
            width={180}
            className="w-[130px] sm:w-auto "
          />
          <button className="flex item-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started
            <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.author_img}
            alt=""
            height={60}
            width={60}
          ></Image>
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {" "}
            {data.author}
          </p>
        </div>
        
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 flex ">
          <Image
            className="border-4 border-white  "
            src={data.image}
            alt=""
            width={1280}
            height={720}
          />
        </div>
    </>
  ) : (
    <></>
  );
};

export default page;
