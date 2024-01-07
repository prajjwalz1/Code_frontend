import React from "react";
import Countdown from "~/pages/Countdown";

const Offerpg = () => {
  return (
    <div className=" bg-black text-white  col-span-2 border-4 border-sky-500 flex max-h-full max-w-full flex-wrap">
      <img src="./girlheadphone.webp" className="h-[14cm] w-[17cm] border-4 border-sky-500 " />
      <div className=" text-center h-[14cm] w-[18cm]" >
        <h1 className="text-5xl font-bold py-9">Hurry up! 40% OFF</h1>
        <h2 className="text-3xl ">Thousands of high tech are waiting for you</h2>
        <h2 className="text-2xl underline"> Offer expiers in:</h2>
        <section> <Countdown /> </section>
        <button className="rounded bg-sky-900 px-4 py-1 text-3xl  text-white">
          Shop Now
        </button>
      </div>
    </div>
  );
};  

export default Offerpg;
