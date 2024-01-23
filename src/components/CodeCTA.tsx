import { LucideWaves } from "lucide-react";
import { BatteryFull } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Mic } from "lucide-react";

const CodeCTA = () => {
  return (
    <div className=" mx-5 flex max-h-full max-w-full flex-row flex-wrap justify-between  ">
      <div className=" mr-5 mt-6   text-left">
        <div className="heading mx-20 text-xl font-bold text-sky-700 lg:text-3xl ">
          CODE MUSIC PRO
        </div>
        <div className="desc mx-10 text-2xl font-light lg:text-3xl">
          Feel The Sensation Of Music
        </div>
        <div className="logo ml-52 max-h-full max-w-full pb-5">
          <img src="./headset.png" className="h-80 w-80  " />
        </div>
      </div>

      <div>
        <div className="card w-[300px] rounded-2xl  bg-slate-400 object-right-top">
          <div className="flex items-center justify-center">
            <img className="h-40 w-40" src="./gheadphone.png" alt="" />
          </div>
          <div className="flex justify-center gap-x-2">
            <div className="rounded-full bg-black p-1"></div>
            <div className="rounded-full bg-sky-700 p-1"></div>
            <div className="rounded-full bg-white p-1"></div>
          </div>
        </div>
        <div className="max-w-3xl text-center md:w-2/3 lg:ml-[1cm]">
          {/* <p className="mb-8 text-xl font-normal text-gray-900 md:ml-0 md:mt-0">
            Elevate your audio music experience with{" "}
            <span className="inline font-bold text-red-600">
              CODE MUSIC PRO
            </span>{" "}
            Bluetooth Headphones. Immerse yourself in <br /> pure sound,
            unbeatable comfort, and <br /> cutting-edge technology.
          </p> */}
          <div className="features flex items-center justify-center">
            <div className="feature mr-6  text-center">
              <div className="img mx-auto flex w-24 items-center justify-center ">
                <LucideWaves />
                <h3 className="mt-2  text-sm font-semibold md:text-sm">
                  Premium Sound 
                </h3>
              </div>
              <div className="img mx-auto flex w-24  items-center justify-center">
                <BatteryFull />
                <h3 className="mt-2 max-w-none text-center text-sm font-semibold md:text-sm">
                  Long Battery Life
                </h3>
              </div>
              <div className="img mx-auto  w-16 flex items-center justify-center">
                <Mic />
                <h3 className="mt-2 max-w-none text-center text-sm font-semibold md:text-sm">
                  Build-in Mic
                </h3>
              </div>
            </div>
          </div>
          <div className="my-4 items-end justify-end ">
            <button className="flex rounded-2xl bg-sky-700 px-5 py-2 text-xl text-white">
              <ShoppingCart />
              <h3>Shop Now</h3>
            </button>
          </div>
        </div>
        {/* <div>
          <h2 className="">Elevate your audio music experience with</h2>
          <span className="inline font-bold text-red-600">
            CODE MUSIC PRO
          </span>{" "}
          Bluetooth Headphones. Immerse yourself in pure sound, unbeatable comfort, and cutting-edge technology.
        </div> */}
        {/* <div className="max-w-2xl  text-right md:w-2/3 lg:ml-[1cm]">
          <p className="text-1xl mb-8 font-normal text-gray-900 md:ml-0 md:mt-0">
            Elevate your audio music experience with{" "}
            <span className="inline font-bold text-red-600">
              CODE MUSIC PRO
            </span>{" "}
            Bluetooth Headphones. Immerse yourself in <br /> pure sound,
            unbeatable comfort, and <br /> cutting-edge technology.
          </p>
          <div className="features  items-right justify-right">
            <div className="feature mr-6">
              <ul>
                <li className="object-right">
                  <div className="img w-26 items-right justify-right  mx-auto flex ">
                    <LucideWaves />
                    <h3 className="mt-2 max-w-none text-center text-sm font-semibold md:text-sm">
                      Premium Sound
                    </h3>
                  </div>
                </li>

                <li className=" text-xl">
                  {" "}
                  <div className="img w-26 items-right justify-right  mx-auto flex">
                    <BatteryFull />
                    <h3 className="mt-2 max-w-none text-center text-sm font-semibold md:text-sm">
                      Long Battery Life
                    </h3>
                  </div>
                </li>

                <li className=" text-xl">
                  <div className="img w-26 items-right justify-right  mx-auto flex">
                    <Mic />
                    <h3 className="mt-2 max-w-none text-center text-sm font-semibold md:text-sm">
                      Build-in Mic
                    </h3>
                    <div className="my-4 items-end justify-end ">
                      <button className="flex rounded-2xl bg-sky-700 px-5 py-2 text-xl text-white">
                        <ShoppingCart />
                        <h3>Shop Now</h3>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default CodeCTA;
