import React from "react";
import CountUp from 'react-countup';
import {map} from "../../utils/Index";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const MainSecTwo = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="bg-black text-white p-8 px-12 flex flex-col lg:flex lg:flex-row lg:justify-center">
      <div className="lg:w-2/5">
        <h1 className="text-5xl font-mono mb-4 text-white">
          We have users from all over the world
        </h1>
        <p className="text-lg font-sans text-gray-300 mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quae
          eum incidunt unde iusto. Sit dicta aperiam enim a omnis assumenda
          dolore.
        </p>
        <div className="grid md:flex md:gap-8">
          <div>
            <h1 className="text-5xl font-mono mb-2 text-white"><CountUp end={20} />M+</h1>
            <p className="text-lg font-sans mb-4 text-gray-300">
              People have joined
            </p>
          </div>
          <div>
            <h1 className="text-5xl font-mono mb-2 text-blue-600"><CountUp end={100} />+</h1>
            <p className="text-lg font-sans mb-4 text-gray-300">
              VVIP people have joined
            </p>
          </div>
          <div>
            <h1 className="text-5xl font-mono mb-2 text-white"><CountUp end={50} />
</h1>
            <p className="text-lg font-sans mb-4 text-gray-300">
              Big companies have joined
            </p>
          </div>
      </div>
    </div>
      <div data-aos='fade-up' data-aos-anchor-easing='ease-in-out' className="md:px-14">
        <img src={map} alt="" />
    </div>
    </div>
  );
};

export default MainSecTwo;
