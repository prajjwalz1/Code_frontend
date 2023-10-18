import Head from "next/head";
import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import SlidingCarousel from "~/components/SlidingCarousel";
import CodeCTA from "~/components/CodeCTA";
import PopularNow from "~/components/PopularNow";

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Shop</title>
        <meta name="description" content="code shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex place-content-start items-center bg-[#231f20] px-4 text-white">
        <div className="logo max-h-full max-w-full ">
          <img src="./logo.png" className="h-20 w-20" />
        </div>
        <div className="aside-except-logo flex flex-grow place-content-evenly pt-2">
          <div className="navlinks  hidden gap-x-6 font-bold sm:flex">
            {/* Hide on small screens */}
            <div className="navlink">Home</div>
            <div className="navlink">Category</div>
            <div className="navlink">My Orders</div>
            <div className="navlink">More</div>
          </div>
          <div className="search-flex  hidden sm:flex">
            {/* Hide on small screens */}
            <div className="logo pr-2">
              <SearchIcon />
            </div>
            <div className="input">
              <input
                className="rounded-full placeholder:pl-2"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="extra-icons flex gap-x-2">
          <div className="user">
            <UserIcon />
          </div>
          <div className="wishlist">
            <HeartIcon />
          </div>
          <div className="cart">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>

      <SlidingCarousel />
      <CodeCTA />
      <PopularNow />

      <div className="cate my-2 text-center text-2xl font-bold">CATEGORIES</div>

      <div className="main bg-[#F2F2F2] px-4 py-4">
        <div className="flex flex-row flex-wrap  place-content-center gap-x-4 gap-y-2   ">
          <div className="flex flex-col gap-y-2">
            <div className="card flex flex-row  items-center rounded-lg bg-[#E6E8E9] pl-8 pt-4">
              <div className="title text-xl font-semibold">Smart Watch</div>
              <div className="image w-60">
                <img src="./watch.png" alt="" />
              </div>
            </div>
            <div className="card flex flex-row  items-center rounded-lg bg-[#E6E8E9] pl-8 pt-4">
              <div className="title text-xl font-semibold">Smart Watch</div>
              <div className="image w-60">
                <img src="./earphones.png" alt="" />
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
}
