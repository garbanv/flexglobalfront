
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface ConsultationsProps {
consultations? :{
  callToAction : string
  callToActionUrl: string
  content: string 
  getConsultationsText: string
  heading: string
  image: {
    url: string
  }
}
}

const Consultations = ({consultations}: ConsultationsProps) => {



  if(!consultations){
    return ''
  }
  return (
    <section   className="relative  w-full  bg-full bg-center bg-fixed"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    }}><div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="max-w-screen-xl  mx-auto ">
        <div className="relative flex rounded-lg  text-white ">
          <div className="flex-1 p-8">
            <h2 className="mb-4 text-sm font-bold tracking-wide uppercase underline">
              {consultations?.getConsultationsText}
            </h2>
            <h2 className="mb-6 text-2xl font-bold">
              {consultations?.heading}
            </h2>
            <div className="space-y-4">
              <div>
              {/*   <h3 className="text-lg font-semibold">Trusted By Thousand</h3>
                <p className="text-sm text-gray-400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium laudantium, totam rem aperiam.
                </p> */}
              <p>  {consultations?.content}</p>
              </div>
           
            </div>
            <button className="mt-6 rounded border border-[#fffff] flex items-center gap-x-3 px-4 py-2 font-semibold text-white hover:bg-blue-600">
              {consultations?.callToAction} <FaArrowRight />  
            </button>
          </div>

          <div className="relative md:w-1/2 w-2/2 flex justify-center ">
            <img
              src={process.env.NEXT_PUBLIC_APP_URL+consultations?.image?.url}
              alt="Consultant"
              className="absolute right-0 -bottom-10  rounded-lg  shadow-lg md:block hidden"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultations;
