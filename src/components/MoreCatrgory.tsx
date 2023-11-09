import { BatteryFull, LucideWaves, Mic } from "lucide-react";

const MoreCatrgory = () => {
  return (
    <div className="cta  flex flex-col items-center pt-2 ">
      <div className="m-4  border-[2px] border-black p-4 text-3xl outline-4 ">
        MORE CATEGORIES
      </div>

      <div className="rounded-lg bg-white p-10  md:p-20">
        <div className="flex flex-row flex-wrap items-center">
          <div className="img m-auto w-1/2 md:mb-0 md:mr-8 md:w-1/3">
            <img
              src="./headset.png"
              alt="Headset"
              className="z-10 rounded-lg"
            />
          </div>
          <div className="max-w-3xl text-center md:w-2/3 lg:ml-[1cm]">
            <p className="mb-8 text-3xl font-normal text-gray-900 md:ml-0 md:mt-0">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoreCatrgory;
