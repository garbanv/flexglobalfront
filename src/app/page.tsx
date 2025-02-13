
import Slideshow from "./(components)/Slideshow";
import WhatWOffer from "./(components)/homepage/WhatWOffer";
import AboutCompany from "./(components)/homepage/AboutCompany";
import Portfolio from "./(components)/homepage/Portfolio";
import Consultations from "./(components)/homepage/Consultations";
import Testimonials from "./(components)/Testimonials";
import ClientLogos from "./(components)/ClientLogos";
import Team from "./(components)/homepage/Team";
import { getHomePage } from "./utils/data";
import { Suspense } from "react";


export default async function Home() {

const homeData =  await getHomePage ()



  const data = homeData?.data
  return (
    <>
 
 
 <Suspense fallback={<div>Loading...</div>}>
      <Slideshow slides = {data?.slideshow}/>
      </Suspense>
      <WhatWOffer offers={data?.whatWeOffer}/>

      <AboutCompany about={data.aboutCompany}/>

      <Portfolio projects={data.projects}/>

      <Consultations consultations= {data.getConsultations}/>

      <Testimonials testimonials={data.testimonials}/>

      <ClientLogos />
      <Team team={data.team}/>


    </>
  );
}
