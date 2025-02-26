"use client";
import Link from "next/link";
import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

interface WhatWeOffer {
  offers?: {
    subheading: string;
    heading: string;
    offerCard: {
      text: string;
      description: string;
      link: string;
      linkText: string;
      image: {
        url: string;
      };
    }[];
  };
}

export default function WhatWOffer({ offers }: WhatWeOffer) {
  return (
    <section className="py-10  w-full">
      <div className="max-w-screen-xl  mx-auto ">
        <div className="">
          
          <h4 className="text-center uppercase underline text-xl my-10 font-bold">
            {offers?.subheading}
          </h4>
          <h3 className="font-bold text-center text-3xl">{offers?.heading}</h3>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-x-5 my-10">
          {offers?.offerCard?.map((offer, index) => {
            return (
              <div className="bg-white shadow-xl p-10 rounded-md" key={index}>
                {/* <FaBagShopping size={50}/> */}
                <img src={process.env.NEXT_PUBLIC_APP_URL+offer?.image?.url} alt="" width="80px"/>
                
                <h3 className="p-5 font-bold">{offer?.text}</h3>
                <p>{offer?.description}.</p>
                <div className="my-5 flex gap-x-2 items-center">
                  <Link href="/" className="underline ">
                    {offer?.linkText}
                  </Link>
                  <FaArrowRight />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
