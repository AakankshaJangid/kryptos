import React from "react";
import CountUp from 'react-countup';
import { avtars , userData , Button , ButtonOutLine , bitcoin,FaArrowAltCircleRight } from "../../utils/Index";
const Header = () => {
  
  return (
    <div className="bg-black text-white p-6">
      <div className="lg:flex  lg:justify-between lg:p-4 lg:gap-44">
        <div className="lg:flex lg:flex-col lg:w-2/4 md:text-center lg:text-left lg:justify-center ">
          <h1 className="text-5xl font-sans mb-4 text-white type-text-output">
            Trusted platform for <span className="text-blue-600">crypto</span>{" "}
            investments
          </h1>
          <p className="text-lg font-sans text-gray-300 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            maiores corporis rerum repellendus minima est suscipit libero,
            aliquam aperiam.
          </p>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4">
            <Button props={"Lets get started"} symbol={<FaArrowAltCircleRight />}/>
            <ButtonOutLine props={"How it works"} />
          </div>
          <p className="text-lg font-sans text-gray-300 mb-4">
            Alreday using kryptos?<span className="text-blue-600">Sign in</span>
          </p>
          <div className="flex flex-col md:flex md:flex-row md:gap-16 md:justify-left lg:gap-8">
            <div className="flex ">
              {avtars.map((data,i) => (
                <div key={i}
                  className="rounded-full p-1
            text-blue-600 w-12 h-12 bg-gray-300 text-3xl   mb-4  -mr-6"
                >
                  <img src={data} alt="" />
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-5xl font-mono mb-1 text-white"><CountUp end={2921} /></h1>
              <p className="text-base font-sans text-gray-300 mb-4">
                Happy Users
              </p>
            </div>
            <div>
              <h1 className="text-5xl font-mono mb-1 text-white"><span className="text-blue-600"><CountUp end={4} />
</span>/5</h1>
              <p className="text-base font-sans text-gray-300 mb-4">
                Rating
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-1/3">
          <img src={bitcoin} alt="" className="h-2/3 "/>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-8 lg:grid lg:grid-cols-5 ">
        {userData.map((data,i)=>(
          <div key={i} className="text-xl 
          font-mono  text-white bg-transparent p-2 text-center rounded-md flex gap-2 justify-center hover:text-2xl hover:p-0">{data.symbol}{data.name}</div>
        ))}
        
      </div>
    </div>
  );
};
export default Header;
