import { SetStateAction } from "react";
import { HomeData } from "./homeTypes";
import { ServicesData } from "./servicesTypes";
import { HealthPlansTypes } from "./healthPlansTypes";
import { AboutTypes } from "./aboutTypes";
import { ResourcesTypes } from "./resourcesTypes";



interface SetHomeDataProps {
  setHomeData: React.Dispatch<SetStateAction<HomeData | null>>;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
  lang: string;
}

interface SetServiceDataProps {
  setServicesData: React.Dispatch<SetStateAction<ServicesData | null>>;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
  lang: string;
}

interface SetHealthPlansDataProps {
  setHealthPlansData: React.Dispatch<SetStateAction<HealthPlansTypes | null>>;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
  lang: string;
}

interface SetAboutDataProps {
  setAboutData: React.Dispatch<SetStateAction<AboutTypes | null>>;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
  lang: string;
}

interface SetResourcesDataProps {
  setResourcesData: React.Dispatch<SetStateAction<ResourcesTypes | null>>;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
  lang: string;
}

export const getHomepageData = async ({
  setHomeData,
  setIsLoading,
  lang,
}: SetHomeDataProps) => {
  try {
    const data = fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/homepage?populate=slideshow.image&populate=whatWeOffer.offerCard.image&populate=aboutCompany.image&populate=projects.image.image&populate=getConsultations.image&populate=testimonials.testimonialsCard.image&populate=team.teamCard.image&locale=${lang}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
        },
      }
    );
    const response = await data;
    const parsed = await response.json();
    setHomeData(parsed);
    setIsLoading(false);
  } catch (error) {
    if(error){{
      return {message:"an error ocurred", status:'FAIL'}
    }}
  }
  
};



export const getServicesData = async ({
  setServicesData,
  setIsLoading,
  lang,
}: SetServiceDataProps) => {
  try {
    const data = fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/service?populate=contentSide.image&populate=featuredImage&populate=serviceCard.image&locale=${lang}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
        },
      }
    );
    const response = await data;
    const parsed = await response.json();
    setServicesData(parsed.data);
    setIsLoading(false);
  } catch (error) {
    if(error){{
      return {message:"an error ocurred", status:'FAIL'}
    }}
  }
  
};

export const getHealthPlansData = async ({
  setHealthPlansData,
  setIsLoading,
  lang,
}: SetHealthPlansDataProps) => {
  try {
    const data = fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/health-plan?populate=contentSide.image&populate=featuredImage&locale=${lang}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
        },
      }
    );
    const response = await data;
    const parsed = await response.json();
    setHealthPlansData(parsed.data);
    setIsLoading(false);
  } catch (error) {
    if(error){{
      return {message:"an error ocurred", status:'FAIL'}
    }}
  }
  
};



export const getAboutData = async ({
  setAboutData,
  setIsLoading,
  lang,
}: SetAboutDataProps) => {
  try {
    const data = fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/about?populate=team.teamCard.image&populate=featuredImage&locale=${lang}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
        },
      }
    );
    const response = await data;
    const parsed = await response.json();
    setAboutData(parsed.data);
    setIsLoading(false);
  } catch (error) {
    if(error){{
      return {message:"an error ocurred", status:'FAIL'}
    }}
  }
  
};


export const getResourcesData = async ({
  setResourcesData,
  setIsLoading,
  lang,
}: SetResourcesDataProps) => {
  try {
    const data = fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/resource?populate=featuredImage&populate=serviceCard.image&locale=${lang}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
        },
      }
    );
    const response = await data;
    const parsed = await response.json();
    setResourcesData(parsed.data);
    setIsLoading(false);
  } catch (error) {
    if(error){{
      return {message:"an error ocurred", status:'FAIL'}
    }}
  }
  
};