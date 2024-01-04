const Category = () => {
  return (
    <>
      <nav className="  font-small  bg-sky-700 text-center text-sm text-white lg:text-4xl">
        SHOP BY CATEGORIES
      </nav>
      <div className="my-4 flex-col items-center   px-8 py-4 ">
        <div className="mx-8 flex flex-wrap justify-evenly gap-y-2">
          <div className="card rounded-2xl bg-[#7dd3fc] shadow-2xl drop-shadow-2xl">
            <div className="card-body justify-center px-2 py-2">
              <div className="badge text-xl font-medium text-red-600">New</div>
              <div className="title text-xl font-extrabold">
                Code Air Buds Pro
              </div>
              <div className="price text-xl font-extrabold">Rs. 5999</div>
              <div className="image w-52 pl-0 ">
                <img src="./earphones.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card rounded-2xl bg-[#7dd3fc] shadow-2xl drop-shadow-2xl">
            <div className="card-body justify-center px-2 py-2">
              <div className="badge text-xl font-medium text-red-600">New</div>
              <div className="title text-xl font-extrabold">Code Music Pro</div>
              <div className="price text-xl font-extrabold">Rs. 8999</div>
              <div className="image w-52 pl-0 ">
                <img src="./watch.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card rounded-2xl bg-[#7dd3fc] shadow-2xl drop-shadow-2xl">
            <div className="card-body justify-center px-2 py-2">
              <div className="badge text-xl font-medium text-red-600">New</div>
              <div className="title text-xl font-extrabold">
                Code Smart Watch
              </div>
              <div className="price text-xl font-extrabold">Rs. 6999</div>
              <div className="image w-52 pl-0 ">
                <img src="./powerbank.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex m-4 items-center justify-center">
          <button className="rounded bg-sky-700 px-4 py-3 text-xl text-white">
            SHOW MORE
          </button>
        </div>
      </div>
    </>
  );
};
export default Category;
