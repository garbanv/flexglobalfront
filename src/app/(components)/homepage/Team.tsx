import React from "react";
import { FaArrowRight } from "react-icons/fa6";
type Props = {};

const Team = (props: Props) => {
  return (
    <section className="py-10  w-full ">
      <div className="max-w-screen-xl  mx-auto ">
        <div className="">
          <h4 className="text-center uppercase underline text-xl my-10 font-bold">
            PORTFOLIO
          </h4>
          <h3 className="font-bold text-center text-3xl">
            Our Recent Projects
          </h3>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-10 my-10 md:px-0 px-5">
          <div className="max-w-xs w-full bg-white shadow-lg rounded-lg ">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              {/*    <!-- <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white text-sm rounded-full px-3 py-1">
                Tech Lead
            </div> --> */}
              <div className="p-4 text-center absolute w-3/4 -bottom-10 -right-0 bg-white shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">
                  James Wilson
                </h2>
                <p>Developer</p>
                <button className="mt-4 bg-black text-white px-4 py-3  shadow-md hover:bg-gray-800 absolute -right-0 -top-14">
                  <FaArrowRight /> 
                </button>
              </div>
            </div>
          </div>


          <div className="max-w-xs w-full bg-white shadow-lg rounded-lg ">
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1672373830660-4655ca9de6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              {/*    <!-- <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white text-sm rounded-full px-3 py-1">
                Tech Lead
            </div> --> */}
              <div className="p-4 text-center absolute w-3/4 -bottom-10 -right-0 bg-white shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">
                  James Wilson
                </h2>
                <p>Developer</p>
                <button className="mt-4 bg-black text-white px-4 py-3 shadow-md hover:bg-gray-800 absolute -right-0 -top-14">
                  <FaArrowRight /> 
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-xs w-full bg-white shadow-lg rounded-lg ">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573879030843-d4b38a33131d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbGUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              {/*    <!-- <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white text-sm rounded-full px-3 py-1">
                Tech Lead
            </div> --> */}
              <div className="p-4 text-center absolute w-3/4 -bottom-10 -right-0 bg-white shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">
                  James Wilson
                </h2>
                <p>Developer</p>
                <button className="mt-4 bg-black text-white px-4 py-2  shadow-md hover:bg-gray-800 absolute -right-0 -top-12">
                  <FaArrowRight /> 
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-xs w-full bg-white shadow-lg rounded-lg ">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1630939687530-241d630735df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              {/*    <!-- <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white text-sm rounded-full px-3 py-1">
                Tech Lead
            </div> --> */}
              <div className="p-4 text-center absolute w-3/4 -bottom-10 -right-0 bg-white shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">
                  James Wilson
                </h2>
                <p>Developer</p>
                <button className="mt-4 bg-black text-white px-4 py-2  shadow-md hover:bg-gray-800 absolute -right-0 -top-12">
                  <FaArrowRight /> 
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
