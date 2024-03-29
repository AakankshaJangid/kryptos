import React from "react";
import {Button,IoCall,IoIosMail} from '../../utils/Index';
import { dataFoo } from "../../utils/FooterData";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  });
  
  return (
    <div className="bg-black w-full p-4 md:p-8 lg:p-10 lg:pt-28 border-t-2 border-gray-600">
      <div data-aos='fade-up' data-aos-anchor-easing='ease-in-out'
 className="text-gray-400 pb-8 flex flex-col lg:flex lg:flex-row gap-6 lg:justify-between">
        <div  className="flex flex-col gap-2 md:flex md:flex-row md:gap-12 lg:flex lg:flex-col lg:gap-6">
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
            <div className="px-4 py-1  flex flex-col gap-2 border-2 border-gray-500 w-full rounded-lg mt-4 md:flex md:flex-row lg:w-4/5">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent w-2/3		focus:outline-none p-2 lg:w-3/5"
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
