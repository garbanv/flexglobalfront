"use client";
import React, { useEffect, useRef, useState } from "react";
import PagesTopBanner from "../(components)/PagesTopBanner";
import localeStore from "../(stores)/languageStore";
import { HealthPlansTypes } from "../utils/healthPlansTypes";
import { getHealthPlansData } from "../utils/data";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Content } from "next/font/google";
import ContentRightSide from "../(components)/ContentRightSide";
import ContentLeftSide from "../(components)/ContentLeftSide";
const Page = () => {
  const lang = localeStore((state) => state.locale);
  const [data, setHealthPlansData] = useState<HealthPlansTypes | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef(null); // Create a ref for the content container

  const [error, setError] = useState<string>("");
  useEffect(() => {
    try {
      getHealthPlansData({ setHealthPlansData, setIsLoading, lang });
    } catch (error) {
      setError("An error occurred while fetching data.");
    }
  }, [lang]);

  useEffect(() => {
    if (data) {
      const hash = window.location.hash;
      if (hash) {
   
        const sectionId = hash.substring(1).replace(/\s+/g, "-").replaceAll('%20',' ');
        const element = document.getElementById(sectionId);
        console.log("hash",sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [data]); 


  return (
    <div>
      <PagesTopBanner
        image={data ? data?.featuredImage.url:''}
        heading1={data ? data?.heading1 : ""}
        heading2={data ? data?.heading2 : ""}
      />
      <div className="" ref={contentRef}>
        {data?.contentSide.map((item, index) => {
          return (
            <div
              id={item?.sectionId.replace(/\s+/g, "-")}
             
              key={index}
            >
              {index % 2 === 0 && <ContentRightSide item={item} />}
            <div className="bg-[#f4f4f4]">
              {index % 2 !== 0 && <ContentLeftSide item={item} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
