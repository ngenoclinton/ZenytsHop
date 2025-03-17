import Image from "next/image";
import Head from "next/head";
import NavBar from "../components/NavBarfolder/NavBar";
import Bannner from "../components/Banner/Bannner";
import { Product } from "../../type";
import Products from "../components/products/Products";

interface Props {
  productData: Product;
}

export default function Home({ productData }: Props) {

  return (
    <>
      <Head>
        <title>ZenytShoppers.ac.ke</title>
        <meta name="description" content="Created by ZenythShoppers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cdn-icons-png.freepik.com/256/12456/12456076.png?ga=GA1.1.1315670878.1727435405&semt=ais_hybrid"
        />
      </Head>

      <main className="">
        <NavBar />
        <div className="contentContainer mx-auto bg-[#e6f1fc] bg-whit">
          <Bannner />
          <Products productData ={productData}/>
        </div>
        <h1 className="text-xl text-brown-500 flex text-center justify-center mt-5 items-center">
          Hi there Welcome to ZenythShop
        </h1>
        {/* Make this a loader */}
      </main>
    </>
  );
}

// fetching the products data frombackend

export const getServerSideProps = async () => {
  const productData = await (
    await fetch("http://localhost:3000/api/productsdata")
  ).json();

  return {
    props: { productData },
  };
};
