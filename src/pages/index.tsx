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
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { type } from "os";

export type Products = {
  id: number;
  pname: string;
  selling_price: number;
  discounted_price: number;
  description: string;
  brand: string;
  category: number;
  category_name: string;
  image: string;
  image_2?: null;
  image_3?: null;
  quantity: number;
  deal: boolean;
  deal_date: string;
  image_thumbnail: string;
}[];

export default function Home({ products }: { products: Products }) {
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
      <PopularNow products={products} />
      <Category />
      <MoreCatrgory />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://prajjwal1.pythonanywhere.com/productapi/");
  const products: Products = await res.json();
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
