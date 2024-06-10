import React from "react";
import Proj1 from "../assets/Projects/Proj1.jpg";

const TEST = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-slate-950 text-white">
      <div className="card-wrapper h-[190px] w-[190px]">
        <div className="card-content z-10 flex items-center justify-center overflow-hidden text-xs">
          <div className="grid max-h-[80%] max-w-[70%] place-content-center">
            <div
              className="relative -z-10 h-[500px] w-[200px]"
              style={{
                backgroundImage: `url(${Proj1})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TEST;
