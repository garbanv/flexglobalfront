import React from "react";
import { FaArrowRight } from "react-icons/fa6";
type Props = {};

const Consultations = (props: Props) => {
  return (
    <section   className="relative  w-full  bg-cover bg-center"
    style={{
      backgroundImage: `url('https://img2.rtve.es/i/?w=1600&i=01736123189181.jpg')`,
    }}><div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="max-w-screen-xl  mx-auto ">
        <div className="relative flex rounded-lg  text-white ">
          <div className="flex-1 p-8">
            <h2 className="mb-4 text-sm font-bold tracking-wide uppercase underline">
              Get Consultations
            </h2>
            <h1 className="mb-6 text-2xl font-bold">
              Find Best Insurance Agent or Need Consultations?
            </h1>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Trusted By Thousand</h3>
                <p className="text-sm text-gray-400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium laudantium, totam rem aperiam.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Protective Insurance</h3>
                <p className="text-sm text-gray-400">
                  We denounce with righteous indignation and dislike beguiled
                  and demoralized by the charms of pleasure.
                </p>
              </div>
            </div>
            <button className="mt-6 rounded border border-[#fffff] flex items-center gap-x-3 px-4 py-2 font-semibold text-white hover:bg-blue-600">
              Find Agent <FaArrowRight />  
            </button>
          </div>

          <div className="relative w-1/2 flex justify-center ">
            <img
              src="https://plus.unsplash.com/premium_photo-1658506717700-fea5519c5501?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Consultant"
              className="absolute right-0 -bottom-10  rounded-lg  shadow-lg"
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
