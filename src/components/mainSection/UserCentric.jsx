import React from "react";
import { uCData } from "../../utils/UserCentricData";
const UserCentric = () => {
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
      <div
        className="grid grid-cols-1  gap-4 p-4 md:grid md:grid-cols-2
      lg:grid lg:grid-cols-3 lg:p-8"
      >
        {uCData.map((data) => (
          <div className="border-2 border-gray-600 p-4 text-center rounded-lg">
                <div className="text-center flex  flex-row justify-evenly p-4 lg:flex
                lg:flex-col">
              <span className=" text-blue-600 text-5xl lg:px-32">{data.Symbol}</span>
              <h1 className="text-2xl p-2 text-mono">{data.heading}</h1>
            </div>

            <p className="text-base font-thin ">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCentric;
