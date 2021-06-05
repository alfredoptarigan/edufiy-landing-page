import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import MostPopular from "../components/MostPopular";
import FavoriteTools from "../components/FavoriteTools";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <MostPopular />
      <FavoriteTools />
    </div>
  );
}
