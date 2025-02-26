'use client'
import React, { useEffect,useState } from "react";
import localeStore from "../(stores)/languageStore";
import PagesTopBanner from "../(components)/PagesTopBanner";
import Link from "next/link";
import VirtualAgentBanner from "../(components)/VirtualAgentBanner";
import { getServicesData } from "../utils/data";
import { ServicesData } from "../utils/servicesTypes";

import ReactMarkdown from 'react-markdown'


export default function ServicesPage() {

  const lang = localeStore((state)=>state.locale)
    
    const [data,setServicesData] = useState<ServicesData | null>(null);
    const [isLoading, setIsLoading] = useState(false);




    const [error,setError]=useState<string>('')
    useEffect(() => {
      try {
        getServicesData({setServicesData, setIsLoading, lang});
      } catch (error) {
        setError("An error occurred while fetching data.")
      }
        
      }, [lang]);
      console.log("servidesData", data);

  return (
    <>
      <PagesTopBanner image={data ? data?.featuredImage.url:''} heading1={data ? data?.heading1:''} heading2={data ? data?.heading2:''}/>
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-5 items-center md:px-0 px-5">
          <div>
            <img src="/asesoria.png" alt="flex global" />
          </div>
          <div>
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-[#BC9B5F]">{data?.contentSide?.contentTitleLine1}</h3>
              <h3 className="text-3xl leading-10 font-bold text-[#BC9B5F]">
              {data?.contentSide?.contentTitleLine2}
              </h3>
            </div>
            <div id="markdownParagraph">
            <ReactMarkdown>
            {data?.contentSide?.content}
            </ReactMarkdown>
            </div>
            <div className="flex justify-center py-10">
              <Link href="/">
                <p className="bg-[#BC9B5F] px-5 py-1 inline text-xs rounded-md uppercase text-white">
                  {data?.contentSide?.buttonText}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <VirtualAgentBanner/>
    </>
  );
}
