import type { Products } from "~/pages";

const PopularNow = ({ products }: { products: Products }) => {
  return (
    <div className="my-4 flex-col  items-center  bg-[#F2F2F2] px-8 py-4 ">
      <div className=" m-4 text-center text-3xl font-extrabold lg:text-4xl">
        POPULAR
        <span className="ml-3 rounded-lg bg-red-500 p-1 text-white">Now</span>
      </div>
      <div className="mx-8 flex flex-wrap justify-evenly gap-y-2">
        {products.map((product) => (
          <div key={product.id} className="card rounded-2xl bg-[#E6E8E9] shadow-2xl drop-shadow-2xl">
            <div className="card-body justify-center px-2 py-2">
              <div className="badge text-xl font-medium text-red-600">New</div>
              <div className="title text-xl font-extrabold">
                {product.pname}
              </div>
              <div className="price text-xl font-extrabold">
                Rs. {product.selling_price}
              </div>
              <div className="image w-52 pl-0 ">
                <img
                  src={`https://prajjwal1.pythonanywhere.com${product.image}`}
                  alt=""
                />
              </div>
              <div className="colors flex my-2 justify-center gap-x-1">
                <div className="color rounded-full bg-slate-100 p-1.5"></div>
                <div className="color rounded-full bg-gray-400 p-1.5"></div>
                <div className="color rounded-full bg-pink-300 p-1.5"></div>
                <div className="color rounded-full bg-purple-400 p-1.5"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularNow;
