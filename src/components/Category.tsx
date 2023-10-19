const Category = () => {
  return (
    <>
      <div className="cate my-2 text-center text-2xl font-bold">CATEGORIES</div>

      <div className="main bg-[#F2F2F2] px-4 py-4">
        <div className="flex flex-row flex-wrap  place-content-center gap-x-4 gap-y-2   ">
          <div className="flex flex-col gap-y-2">
          <div className="card flex flex-row  items-center rounded-lg bg-[#E6E8E9] pl-8 pt-4">
              <div className="title text-xl font-semibold">EAR PHONE</div>
              <div className="image w-60">
                <img src="./earphones.png" alt="" />
              </div>
            </div>
            <div className="card flex flex-row  items-center rounded-lg bg-[#E6E8E9] pl-8 pt-4">
              <div className="title text-xl font-semibold">Smart Watch</div>
              <div className="image w-60">
                <img src="./watch.png" alt="" />
              </div>
            </div>
          </div>
          <div className="monolith-card flex flex-row flex-wrap items-center justify-evenly rounded-lg bg-[#E6E8E9] pl-8  pt-4 lg:flex-col">
            <div className="title text-center text-xl font-semibold">
              Power Bank
            </div>
            <div className="image w-60">
              <img src="./powerbank.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
