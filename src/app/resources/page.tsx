"use client";
import React, { useEffect, useState } from "react";
import PagesTopBanner from "../(components)/PagesTopBanner";
import localeStore from "../(stores)/languageStore";
import Team from "../(components)/homepage/Team";
import { getResourcesData } from "../utils/data";
import { ResourcesTypes } from "../utils/resourcesTypes";
import ServiceCard from "../(components)/ServiceCard";
import VirtualAgentBanner from "../(components)/VirtualAgentBanner";

const ResourcesPage = () => {
  const lang = localeStore((state) => state.locale);

  const [data, setResourcesData] = useState<ResourcesTypes | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string>("");
  useEffect(() => {
    try {
        getResourcesData({ setResourcesData, setIsLoading, lang });
    } catch (error) {
      setError("An error occurred while fetching data.");
    }
  }, [lang]);
  console.log("resor", data);

  return (
    <main>
      <PagesTopBanner
        /* image={ "https://res.cloudinary.com/dwcqgwvxa/image/upload/v1741023083/BANNER_TOP_LANDING_1_4caf86edb6.png"} */
        image={data ? data?.featuredImage?.url : ""}
        heading1={lang === "en" ? "Resources" : "Recursos"}
        heading2={lang === "en" ? "" : ""}
      />
      <div className="max-w-screen-xl mx-auto ">
        <section>
          <div className="grid  items-center justify-center grid-cols-1 pt-10">
            <h3 className="text-3xl font-bold text-[#BC9B5F] my-5 text-center">
              {data?.heading3}
            </h3>

            <p className="font-bold text-xl mb-5 text-center">
              {data?.heading4}
            </p>
          </div>
          {/* <h1 className="text-3xl font-bold text-center mb-10">About Us</h1> */}
        </section>
        <section>
        <div className="grid md:grid-cols-4 gap-2  md:px-0 px-5 py-10">
          {data?.serviceCard?.map((service,index)=>{
            return (<ServiceCard key={index} service={service}/>)
          })}
        </div>
        </section>
   
      </div>
      <VirtualAgentBanner/>
    </main>
  );
};

export default ResourcesPage;
