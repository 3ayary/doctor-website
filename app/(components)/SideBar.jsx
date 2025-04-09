"use client";
import Link from "next/link";

import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex flex-col bg-white shadow-md p-4 ${
        open ? " lg:w-[15%]" : " w-[15%] lg:w-[8%]"
      } h-[100%] relative duration-300 ]`}
    >
      <div
        className={`bg-[#ECEDF8] rounded-full flex justify-center items-center absolute -right-4 top-9 w-[40px] h-[40px] border border-[#002364] cursor-pointer ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>

      <div className="flex flex-col items-center justify-center mb-[5%]">
        <img src="logo.png" className={ open ? "w-[40px] lg:w-[50px] lg:h-[50px] h-[40px] mb-[3%]" :"w-[0px] lg:w-[50px] lg:h-[50px] h-[0px] mb-[3%]"} />

        {open ? (
          <h1 className="text-[20px] font-bold mb-[5%]">Dashboard</h1>
        ) : (
          ""
        )}
      </div>

      <div className="">
        <Link href="/dashboard">
          <button className={`text-start rounded flex  px-6 py-3 font-medium w-[100%] cursor-pointer text-black opacity-100  hover:bg-[#ECEDF8] }`}
          
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            {open ? "Home" : ""}
          </button>
        </Link>

        <Link href="/dashboard/Content">
          <button className="text-start flex rounded px-6 py-3 font-medium w-[100%] cursor-pointer text-black opacity-100 hover:bg-[#ECEDF8]"
  
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
              />
            </svg>
            {open ? "Content" : ""}
          </button>
        </Link>

        <Link href="/dashboard/Schedule">
          <button className="text-start rounded flex  px-6 py-3 font-medium w-[100%] cursor-pointer text-black opacity-100  hover:bg-[#ECEDF8]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
              />
            </svg>
            {open ? "Schedule" : ""}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
