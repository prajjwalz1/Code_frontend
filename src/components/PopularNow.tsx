const PopularNow = () => {
  return (
    <div>
      <nav className="  bg-sky-700  text-center text-1xl text-white font-medium lg:text-4xl">
        POPULAR
        <span className="ml-3  p-1 text-[#a3e635]">NOW</span>
      </nav>
    <div className="my-4 flex-col items-center   px-8 py-4 ">
      
      <div className="mx-8 flex flex-wrap justify-evenly gap-y-2">
        <div className="card rounded-2xl bg-[#E6E8E9] shadow-2xl drop-shadow-2xl">
          <div className="card-body justify-center px-2 py-2">
            <div className="badge text-xl font-medium text-red-600">New</div>
            <div className="title text-xl font-extrabold">
              Code Air Buds Pro
            </div>
            <div className="price text-xl font-extrabold">Rs. 5999</div>
            <div className="image w-52 pl-0 ">
              <img src="./earpods.png" alt="" />
            </div>
            <div className="colors flex justify-center gap-x-1">
              <div className="color rounded-full bg-slate-100 p-1.5"></div>
              <div className="color rounded-full bg-gray-400 p-1.5"></div>
              <div className="color rounded-full bg-pink-300 p-1.5"></div>
              <div className="color rounded-full bg-purple-400 p-1.5"></div>
            </div>
          </div>
        </div>
        <div className="card rounded-2xl bg-[#E6E8E9] shadow-2xl drop-shadow-2xl">
          <div className="card-body justify-center px-2 py-2">
            <div className="badge text-xl font-medium text-red-600">New</div>
            <div className="title text-xl font-extrabold">Code Music Pro</div>
            <div className="price text-xl font-extrabold">Rs. 8999</div>
            <div className="image w-52 pl-0 ">
              <img src="./headset.png" alt="" />
            </div>
            <div className="colors flex justify-center gap-x-1">
              <div className="color rounded-full bg-slate-100 p-1.5"></div>
              <div className="color rounded-full bg-gray-400 p-1.5"></div>
              <div className="color rounded-full bg-pink-300 p-1.5"></div>
              <div className="color rounded-full bg-purple-400 p-1.5"></div>
            </div>
          </div>
        </div>
        <div className="card rounded-2xl bg-[#E6E8E9] shadow-2xl drop-shadow-2xl">
          <div className="card-body justify-center px-2 py-2">
            <div className="badge text-xl font-medium text-red-600">New</div>
            <div className="title text-xl font-extrabold">Code Smart Watch</div>
            <div className="price text-xl font-extrabold">Rs. 6999</div>
            <div className="image w-52 pl-0 ">
              <img src="./watch.png" alt="" />
            </div>
            <div className="colors flex justify-center gap-x-1">
              <div className="color rounded-full bg-slate-100 p-1.5"></div>
              <div className="color rounded-full bg-gray-400 p-1.5"></div>
              <div className="color rounded-full bg-pink-300 p-1.5"></div>
              <div className="color rounded-full bg-purple-400 p-1.5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PopularNow;
