import React from "react";
import { uCData } from "../../utils/UserCentricData";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const MainSecThree = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="bg-black text-white font-sans p-6 ">
      <div className="text-center">
        <h1 className="text-4xl font-mono mb-4 text-white">
          Make every step <span className="text-blue-600">user</span>-
          <span className="text-blue-600">centric</span>
        </h1>
        <p className="text-lg font-sans mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div data-aos='fade-up' data-aos-anchor-easing='ease-in-out'
        className="grid grid-cols-1  gap-4 p-4 md:grid md:grid-cols-2
      lg:grid lg:grid-cols-3 lg:p-8"
      >
        {uCData.map((data,i) => (
          <div key={i} className="bg-gray-800 p-4 text-center rounded-lg ">
                <div className="text-center flex  flex-row justify-center p-4 lg:flex
                lg:flex-col lg:justify-center lg:items-center">
              <span className=" text-blue-600 text-5xl ">{data.Symbol}</span>
              <h1 className="text-2xl p-2 text-mono">{data.heading}</h1>
            </div>

            <p className="text-base font-thin ">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSecThree;
