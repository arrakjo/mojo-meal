import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import RestaurantList from "../components/RestaurantList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mojo Meal</title>
        <meta
          name="description"
          content="Order food & groceries near you with Mojo Meal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      <RestaurantList />
    </div>
  );
}
