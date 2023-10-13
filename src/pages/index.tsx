import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Shop</title>
        <meta name="description" content="code shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex bg-[#231f20] place-content-start  px-4 py-10 text-white">
        <div className="logo h-10 w-10">
          <img src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png" />
        </div>
        <div className="aside-except-logo flex flex-grow  place-content-evenly pt-2">
          <div className="navlinks flex gap-x-2">
            <div className="navlink"> Home</div>
            <div className="navlink"> Category</div>
            <div className="navlink">About</div>
          </div>
          <div className="search-flex flex">
            <div className="logo">Search Icon</div>
            <div className="input">
              <input />
            </div>
          </div>

          <div className="extra-icons flex gap-x-2">
            <div className="user"> user </div>
            <div className="wishlist"> fav</div>
            <div className="cart">cart</div>
          </div>
        </div>
      </div>
    </>
  );
}
