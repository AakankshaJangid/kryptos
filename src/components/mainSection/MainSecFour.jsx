import React from "react";
import {Button,phone,AiFillApple} from "../../utils/Index";

import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const MainSecFour = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="bg-black text-gray-400 p-6">
      <div data-aos='fade-up' data-aos-anchor-easing='ease-in-out' className=" lg:flex lg:p-8 ">
        <div className="lg:p-8">
          <h1 className="text-5xl font-mono mb-4 text-white">
            Ready To Get Started?
          </h1>
          <p className="text-xl font-sans mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            eligendi ex.
          </p>
          <Button props={"Download App"} symbol={<AiFillApple />} />
        </div>
        <div className="w-full transition-all duration-500 bg-gradient-radial from-blue-400 via-black  to-black ">
            <img src={phone} alt="" className="px-8 md:px-32" />
        </div>
        
      </div>
    </div>
  );
};

export default MainSecFour;
