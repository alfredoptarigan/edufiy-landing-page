import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import MostPopular from "../components/MostPopular";
import FavoriteTools from "../components/FavoriteTools";
import Testimonial from "../components/Testimonial";
import Ready from "../components/Ready";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <MostPopular />
      <FavoriteTools />
      <Testimonial />
      <Ready />
    </div>
  );
}
