import { LucideWaves } from "lucide-react";
import { BatteryFull } from "lucide-react";
import { Mic } from "lucide-react";

const CodeCTA = () => {
  return (
    <div className="cta  pt-2 ">
      <div className=" mt-6 flex-col text-center">
        <div className="heading  text-3xl font-bold lg:text-5xl ">
          CODE MUSIC PRO
        </div>
        <div className="desc text-2xl font-light lg:text-3xl">
          Feel The Sensation Of Music
        </div>
      </div>

      <div className="rounded-lg bg-white p-10  md:p-20">
        <div className="md:flex md:flex-row-reverse md:items-center">
          <div className="img m-auto w-1/2 md:mb-0 md:mr-8 md:w-1/3">
            <img
              src="./headset.png"
              alt="Headset"
              className="z-10 rounded-lg"
            />
          </div>
          <div className="max-w-4xl text-center md:w-2/3">
            <p className="mb-8 text-2xl text-gray-900 md:ml-0 md:mt-0 font-normal">
              Elevate your audio music experience with{" "}
              <span className="inline font-bold text-red-600">
                CODE MUSIC PRO
              </span>{" "}
              Bluetooth Headphones. Immerse yourself in <br/> pure sound, unbeatable
              comfort, and <br/> cutting-edge technology.
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
                <div className="img mx-auto flex w-24 flex-col items-center justify-center">
                  <Mic />
                  <h3 className="mt-2 max-w-none text-center text-sm font-semibold md:text-sm">
                    Build-in Mic
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CodeCTA;
