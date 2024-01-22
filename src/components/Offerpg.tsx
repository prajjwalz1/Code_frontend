import { TimerReset } from "lucide-react";
import React from "react";
import Countdown from "~/pages/Countdown";

const Offerpg = () => {
  return (
    <div className=" col-span-2 flex  max-h-full max-w-full flex-wrap border-4 border-sky-500 bg-black text-white">
      <img
        src="./girlheadphone.webp"
        className="h-[14cm] w-[17cm] border-4 border-sky-500 "
      />
      <div className=" h-[14cm] w-[18cm] text-center">
        <h1 className="py-9 text-5xl font-bold">Hurry up! 40% OFF</h1>
        <h2 className="text-3xl ">
          Thousands of high tech are waiting for you
        </h2>
        <h2 className="text-2xl underline py-2"> Offer expiers in:</h2>
        <h2 className="mx-80 py-4 ">
          <TimerReset />
        </h2>
        <section>
          {" "}
          <Countdown />{" "}
        </section>
        <button className="rounded  bg-sky-900 px-4 py-1 text-3xl  text-white">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Offerpg;
