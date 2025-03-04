'use client'
import Link from "next/link";
import React from "react";
import localeStore from "../(stores)/languageStore";

const VirtualAgentBanner = () => {
    const lang = localeStore((state)=>state.locale)
  return (
    <section className="bg-[#f4f4f4]">
    <div className="max-w-screen-xl mx-auto md:pt-0 pt-5">
    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
      <div className="">
        <div className="flex flex-col md:items-end items-center">
         <h3 className="text-5xl font-bold ">{lang === 'en' ?'VIRTUAL':'ASISTENTE'}</h3>
        <h3 className="text-5xl font-bold ">{lang==='en' ? 'ASISTANT':'VIRTUAL'}</h3>
        
        <h3 className="text-xl font-bold ">Phone: +1 555-555-555</h3>
        </div>
       
        <div className="flex flex-col md:items-end items-center my-10">
          <Link href="/">
            <p className="bg-[#BC9B5F] px-5 py-1 inline  rounded-md text-white uppercase">
            {lang==='en' ? 'Contact Us' : 'Contáctanos'}
            </p>
          </Link>
        </div>
      </div>
      <div className="pt-10 md:px-0 px-5">
        <img src="./virtualAgent.png" alt="flex global virtual agent" width={320} />
      </div>
    </div>
    </div>
    </section>
  );
};

export default VirtualAgentBanner;
