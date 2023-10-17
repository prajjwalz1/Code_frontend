import { LucideWaves } from "lucide-react";

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

      <div className="rounded-lg bg-white p-10 shadow-lg md:p-20">
        <div className="md:flex md:flex-row-reverse md:items-center">
          <div className="img m-auto w-1/2 md:mb-0 md:mr-8 md:w-1/3">
            <img
              src="./headset.png"
              alt="Headset"
              className="z-10 rounded-lg"
            />
          </div>
          <div className="max-w-lg text-center md:w-2/3">
            <p className="mb-8 text-xl text-gray-600 md:ml-8 md:mt-0">
              Elevate Your Music Experience with{" "}
              <span className="inline text-red-400">CODE MUSIC PRO.</span>{" "}
              Discover the finest sound quality and immerse yourself in music
              like never before.
            </p>
            <div className="features flex items-center justify-center">
              <div className="feature mr-6 text-center">
                <div className="img mx-auto w-16">
                  <LucideWaves />
                </div>
                <h3 className="mt-2 text-center text-sm font-semibold md:text-lg max-w-none">
                  Premium Sound
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CodeCTA;
