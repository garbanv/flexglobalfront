import Image from "next/image";
import Slideshow from "./(components)/Slideshow";
import WhatWOffer from "./(components)/homepage/WhatWOffer";
import AboutCompany from "./(components)/homepage/AboutCompany";
import Portfolio from "./(components)/homepage/Portfolio";
import Consultations from "./(components)/homepage/Consultations";
import Testimonials from "./(components)/Testimonials";
import ClientLogos from "./(components)/ClientLogos";
import Footer from "./(components)/Footer";
import Team from "./(components)/homepage/Team";

export default function Home() {
  return (
    <>
      <Slideshow />

      <WhatWOffer />

      <AboutCompany />

      <Portfolio />

      <Consultations />

      <Testimonials />

      <ClientLogos />
      <Team />

      <Footer />
    </>
  );
}
