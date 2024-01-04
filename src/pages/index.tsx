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
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Category from "~/components/Category";
import MoreCatrgory from "~/components/MoreCatrgory";

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Shop</title>
        <meta name="description" content="code shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SlidingCarousel />
      <CodeCTA />
      <PopularNow />
      <Category />
      {/* <MoreCatrgory /> */}
      <Footer />
      <section className="flex  w-full flex-row items-center justify-center bg-white">
        <img src="./RedLogoMobile.png" className=" w-6" />
        <p className="text-center text-[12px] font-bold text-black sm:text-[15px] lg:text-base">
          Copyright © 2023 Code - All rights reserved.
        </p>
      </section>
    </>
  );
}
