import React from "react";
import { mainOneData } from "../../utils/MainSecOneData";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const MainSecOne = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div  className="bg-black text-gray-400 p-8">
      <div className="px-4 text-center">
        <h1 className="text-5xl font-mono mb-4 text-white">
          We take care of our <span className="text-blue-600">quality</span>
        </h1>
              <p className="text-lg font-sans text-gray-300 mb-4">We always provide best quality for our users</p>
      </div>
      <div data-aos='fade-up' data-aos-anchor-easing='ease-in-out' className="lg:flex gap-2 p-1">
        {mainOneData.map((data) => (
          <div className="text-center md:p-4 mb-8 lg:w-1/3 ">
            <div className="lg:mx-4 flex justify-center">
            <div className="rounded-full p-2
            text-blue-600 w-12 bg-gray-300 text-3xl mx-32 mb-4 md:mx-72 lg:mx-36">{data.symbol}</div>
            </div>
                <h1 className="text-3xl font-mono mb-4 text-white">{data.heading}</h1>
                <p className="text-lg font-sans text-gray-300 mb-4">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSecOne;
