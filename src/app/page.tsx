"use client";

import { useState, useEffect, Suspense, startTransition } from "react";
import Slideshow from "./(components)/Slideshow";
import WhatWOffer from "./(components)/homepage/WhatWOffer";
import AboutCompany from "./(components)/homepage/AboutCompany";
import Portfolio from "./(components)/homepage/Portfolio";
import Consultations from "./(components)/homepage/Consultations";
import Testimonials from "./(components)/Testimonials";
import ClientLogos from "./(components)/ClientLogos";
import Team from "./(components)/homepage/Team";
import { getHomepageData } from "./utils/data";
import localeStore from "./(stores)/languageStore";

import { HomeData } from "./utils/homeTypes";

export default function Home() {
 

  const lang = localeStore((state) => state.locale);

  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error,setError]=useState<string>('')

  useEffect(() => {
  try {
    getHomepageData({setHomeData, setIsLoading, lang});
  } catch (error) {
    setError("An error occurred while fetching data.")
  }
    
  }, [lang]);


  console.log("homeData", homeData);
  return (
    <>
    {error && <div className="bg-red-800 p-2 text white">{}</div>}
      <Slideshow slides={homeData?.data?.slideshow} />
      <WhatWOffer offers={homeData?.data?.whatWeOffer} />
      <AboutCompany about={homeData?.data?.aboutCompany} />
      <Portfolio projects={homeData?.data?.projects} />
      <Consultations consultations={homeData?.data?.getConsultations} />
  {/*     <Testimonials testimonials={homeData?.data?.testimonials} /> */}
   {/*    <ClientLogos /> */}
      <Team team={homeData?.data?.team} />
    </>
  );
}
