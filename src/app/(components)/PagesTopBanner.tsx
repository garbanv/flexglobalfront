'use client'
import React from 'react';
import localeStore from "../(stores)/languageStore";
import { useInView } from "react-intersection-observer";

interface PagesTopBanner  {
    image: string
    heading1: string
    heading2: string
}

const PagesTopBanner = ({image, heading1,heading2}:PagesTopBanner) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true,
  });



  const { ref:ref2, inView:inView2 } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
    delay: 300,
    rootMargin: '-550px 0px', 
  });
    const lang = localeStore((state)=>state.locale)
    return (
        <section className="bg-gray-50 dark:bg-gray-900 slide-bck-center">
        <div
          id="banner"
          className="relative  w-full h-[500px] slide-bck-center"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_APP_URL}${image})`,
          }}
        >
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          <div className="max-w-screen-xl mx-auto pt-36 ">
            <h3 className={`relative  text-white font-bold text-[60px] md:px-0 px-5 ${ inView ? "slide-top" : ""}`} ref={ref}>
            {/* {lang === 'en' ? 'Our' : 'Nuestros'} */}
            {heading1}
            </h3>
            <h3 className={`relative  text-white font-bold text-[60px] md:px-0 px-5 leading-10 text-[#BC9B5F] ${ inView ? "slide-top transition delay-700 duration-300 ease-in-out" : ""}`} style={{color:'#BC9B5F'}} ref={ref}>
            {/* {lang === 'en' ? 'Services' : 'Servicios'} */}
            {heading2}
            </h3>
          </div>
        </div>
      
      </section>
    );
}

export default PagesTopBanner;
