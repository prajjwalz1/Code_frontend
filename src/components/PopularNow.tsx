const PopularNow = () => {
  return (
    <div>
      <nav className="  text-1xl  bg-sky-700 text-center font-medium text-white lg:text-4xl">
        POPULAR
        <span className="ml-3  p-1 text-[#a3e635]">NOW</span>
      </nav>
      <div className="my-4 flex-col items-center   px-8 py-4 ">
        <div className="mx-8 flex flex-wrap justify-evenly gap-y-2">
          <div className="card rounded-2xl bg-[#E6E8E9] shadow-2xl drop-shadow-2xl">
            <div className="card-body justify-center px-2 py-2">
              <div className="image w-52 pl-0 ">
                <img src="./earpods.png" alt="" />
              </div>
              <div className="title text-2xl ">Code Fire 2</div>
              <div className="flex flex-wrap">
                <div className="price text-xl font-bold">&#8377; 2,199 <span className="text-green"></span></div>
                
              </div>
            </div>
          </div>
          <div className="card rounded-2xl bg-[#E6E8E9] shadow-2xl drop-shadow-2xl">
            <div className="card-body justify-center px-2 py-2">
              <div className="image w-52 pl-0 ">
                <img src="./headset.png" alt="" />
              </div>
              <div className="title text-2xl ">Code Watch Pro</div>
              <div className="flex flex-wrap">
                <div className="price text-xl font-bold">&#8377; 2,199</div>
              </div>
            </div>
          </div>
          <div className="card rounded-2xl bg-[#E6E8E9] shadow-2xl drop-shadow-2xl">
            <div className="card-body justify-center px-2 py-2">
              <div className="image w-52 pl-0 ">
                <img src="./watch.png" alt="" />
                <div className="title text-2xl ">Firebase Code ll</div>
                <div className="flex flex-wrap">
                  <div className="price text-xl font-bold">&#8377; 2,199</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularNow;
