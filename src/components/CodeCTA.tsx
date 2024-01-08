import { LucideWaves } from "lucide-react";
import { BatteryFull } from "lucide-react";
import { Mic } from "lucide-react";

const CodeCTA = () => {
  return (
    <div className="cta  pt-2  flex  flex-wrap ">
      <div className=" mr-5 mt-6  flex-col text-left">
        <div className="heading mx-20 text-xl font-bold text-sky-700 lg:text-3xl ">
          CODE MUSIC PRO
        </div>
        <div className="desc mx-10 text-2xl font-light lg:text-3xl">
          Feel The Sensation Of Music
        </div>
        <div className="logo max-h-full max-w-full ">
          <img src="./headset.png" className="h-80 w-80 mx-20" />
        </div>
      </div>

      <div className="rounded-lg bg-white p-10 md:p-20">
        {/* <div className="md:flex md:flex-row-reverse md:items-center">
          </div> */}
       
       <div className="card rounded-2xl px-6  bg-gray-400 shadow-2xl drop-shadow-2xl ml-auto">
            <div className="card-body justify-center px-2 py-2">
              <div className="image w-52 pl-0 ">
                <img src="./gheadphone.png" alt="" />
              </div>
              <div className="colors flex justify-center gap-x-1">
              <div className="color rounded-full bg-black p-1.5"></div>
              <div className="color rounded-full bg-sky-700 p-1.5"></div>     
              <div className="color rounded-full bg-white p-1.5"></div>
              </div>
            </div>
          </div>

        {/* <div className="max-w-3xl text-right md:w-2/3 lg:ml-[1cm]">
            <p className="mb-8 text-2xl font-normal text-gray-900 md:ml-0 md:mt-0">
              Elevate your audio music experience with{" "}
              <span className="inline font-bold text-red-600">
                CODE MUSIC PRO
              </span>{" "}
              Bluetooth Headphones. Immerse yourself in <br /> pure sound,
              unbeatable comfort, and <br /> cutting-edge technology.
            </p>
            <div className="features flex items-center justify-center">
              <div className="feature mr-6 flex text-center">
                <div className="img mx-auto flex w-24 flex-col items-center justify-center ">
                  <LucideWaves />
                  <h3 className="mt-2 max-w-none text-center text-sm font-semibold md:text-sm">
                    Premium Sound
                  </h3>
                </div>
                <div className="img mx-auto flex w-24 flex-col items-center justify-center">
                  <BatteryFull />
                  <h3 className="mt-2 max-w-none text-center text-sm font-semibold md:text-sm">
                    Long Battery Life
                  </h3>
                </div>
                <div className="img mx-auto flex w-16 flex-col items-center justify-center">
                  <Mic />
                  <h3 className="mt-2 max-w-none text-center text-sm font-semibold md:text-sm">
                    Build-in Mic
                  </h3>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};
export default CodeCTA;
