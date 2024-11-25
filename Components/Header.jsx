import Image from "next/image";
import React from "react";
import { assets } from "../Assets/assets";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28 ">
      <div className="flex justify-between items-center ">
        <Image
          src={assets.logo}
          width={180}
          alt="Logo-Image"
          className="w-[130px] sm:w-auto"
        ></Image>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started <Image src={assets.arrow} alt="" />
        </button>
        </div>
        <div className="text-center my-8">
          <h1 className="text-3xl sm:text-5xl font-medium">Latest Blog</h1>
          <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            tempora deserunt neque? Veniam quos, sequi distinctio earum
            corporis, voluptatem nulla fugiat ut quibusdam, exercitationem
            dolore quis. Totam, impedit eveniet necessitatibus rem nulla
            repudiandae accusantium aliquam laboriosam vero fugit hic cumque.
          </p>
          <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black">
            <input type="email" placeholder="Enter Your Email" className="pl-4 outline-none"></input>
            <button className="border border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">Subscribe</button>
          </form>
        </div>
      
    </div>
  );
};

export default Header;