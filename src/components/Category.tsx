const Category = () => {
  return (
    <>
      <nav className="  font-small  bg-sky-700 text-center  text-2xl text-white">
        SHOP BY CATEGORIES
      </nav>
      <div className="my-1 flex-col items-center   px-8 py-4 ">
        <div className=" flex flex-wrap justify-evenly gap-y-1">
          <div className="card rounded-xl bg-[#7dd3fc] ">
          <div className="card rounded-xl bg-[#7dd3fc] shadow-2xl drop-shadow-2xl">
            <div className="card-body justify-center px-2 py-2">
              <div className=" my-4 w-60 ">
                <img src="./earphones.png" alt="Wa" />
              </div>
              <div className="rounded bg-black text-center text-xl text-white">
                EARPHONE
              </div>
            </div>
          </div>
          </div>
          <div className="card rounded-2xl bg-[#7dd3fc] shadow-2xl drop-shadow-2xl">
            <div className="card-body justify-center px-2 py-2">
              <div className="image h-50 w-60 ">
                <img src="./watch.png" alt="" />
              </div>
              <div className="rounded bg-black text-center text-xl text-white">
                SMART WATCH
              </div>
            </div>
          </div>
          <div className="card rounded-2xl bg-[#7dd3fc] shadow-2xl drop-shadow-2xl">
            <div className="card-body justify-center px-2 py-2">
              <div className="image w-52 pl-0 ">
                <img src="./powerbank.png" alt="" />
              </div>
              <div className=" rounded bg-black text-center text-xl text-white">
                POWERBANK
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-4 flex items-center justify-center">
          <button className="rounded bg-sky-700 px-4 py-3 text-xl text-white">
            SHOW MORE
          </button>
        </div>
      </div>
    </>
  );
};
export default Category;
