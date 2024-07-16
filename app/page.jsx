

// pages/index.js
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Contact from "../components/Contacts/Contact";
import Article from "../components/Article/Article";
import Offers from "../components/Offers/Offers";
import Services from '../components/home/Serives'
import {authOptions}from '../app/lib/nextAuth'
import { getServerSession } from "next-auth/next";
import Nav from "../components/header/Navbarmoblie";
export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
  
      <Hero />
      <About />
      <Services />
      <Nav/>
      <Article />
      <Offers />
      <Contact />
    </div>
  );
}
