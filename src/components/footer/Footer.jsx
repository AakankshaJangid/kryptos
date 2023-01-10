import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import Button from "../sharedComponents/Button";

const Footer = () => {
  const dataFoo = [
    {
      name: "Links",
      item1: "Home",
      item2: "About Us",
      item3: "Bookings",
      item4: "Blog",
    },
    {
      name: "Legal",
      item1: "Terms Of Use",
      item2: "Privacy Policy",
      item3: "Cookie Policy",
    },
    {
      name: "Product",
      item1: "Take Tour",
      item2: "Live Chat",
      item3: "Reviews",
    },
  ];
  return (
    <div className="bg-black w-full p-4 md:p-8 lg:p-8">
      <div className="text-gray-400 pb-8 flex flex-col lg:flex lg:flex-row gap-6 lg:justify-between">
        <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-12 lg:flex lg:flex-col lg:gap-6">
          <div className="flex flex-col gap-1 ">
            <span className="text-blue-600 text-2xl">
              <IoIosMail />
            </span>
            <h3 className="text-lg font-sans">Help@Kryptos.Com</h3>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-blue-600 text-2xl">
              <IoCall />
            </span>
            <h3 className="text-lg font-sans">+1234 456 678 89</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-2 gap-4 lg:flex lg:gap-32">
          <div>
            <h1 className="text-2xl font-medium font-sans mb-4">{dataFoo[0].name}</h1>
            <ul className="text-lg font-sans">
              <li>{dataFoo[0].item1}</li>
              <li>{dataFoo[0].item2}</li>
              <li>{dataFoo[0].item3}</li>
              <li>{dataFoo[0].item4}</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-medium font-sans mb-4">{dataFoo[1].name}</h1>
            <ul className="text-lg font-sans" >
              <li>{dataFoo[1].item1}</li>
              <li>{dataFoo[1].item2}</li>
              <li>{dataFoo[1].item3}</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-medium font-sans mb-4">{dataFoo[2].name}</h1>
            <ul className="text-lg font-sans">
              <li>{dataFoo[2].item1}</li>
              <li>{dataFoo[2].item2}</li>
              <li>{dataFoo[2].item3}</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-2xl font-medium font-sans mb-4">Newsletter</h1>
            <h4 className="text-lg font-sans">Stay Up To Date</h4>
            <div className="px-4 py-1 flex flex-col gap-2 border-2 border-gray-500 w-full rounded-lg mt-2 md:flex md:flex-row lg:w-4/5">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent		focus:outline-none p-2 lg:w-3/5"
              />
              <Button props={"SUBSCRIBE"} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-gradient-to-r from-black via-white to-black"></div>
      <div className="text-gray-400 text-sm p-2 text-center lg:text-lg lg:pt-4">
        <p>Copyright 2023 kryptos.com All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
