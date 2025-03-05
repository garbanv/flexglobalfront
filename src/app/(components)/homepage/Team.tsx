import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface Member {
  name: string
  image:{
    url: string
  }
  lastname: string
  position: string
  memberLink: string
}

interface TeamProps {
  team?: {
    heading: string
    teamCard: Member[]
    teamText: string
  }
}


const Team = ({team}: TeamProps) => {
  return (
    <section className="py-5  w-full ">
      <div className="max-w-screen-xl  mx-auto ">
        <div className="">
          <h4 className="text-center uppercase underline text-xl my-10 font-bold">
            {team?.teamText}
          </h4>
          <h3 className="font-bold text-center text-3xl">
            {team?.heading}
          </h3>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-10 my-10 md:px-0 px-5">
      
      {team?.teamCard.map((member,index)=>{
        return (
          <div className="max-w-xs w-full bg-white shadow-lg rounded-lg " key={index}>
          <div className="relative">
            <img
              src={member?.image?.url} 
              alt="Team Member"
              className="w-full h-64 object-cover"
            />

            <div className="p-4 text-center absolute w-3/4 -bottom-10 -right-0 bg-white shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>
              <p>{member.position}</p>
             
              {/* <button className="mt-4 bg-black text-white px-4 py-3  shadow-md hover:bg-gray-800 absolute -right-0 -top-14">
             <Link href="/">   <FaArrowRight /> </Link>
              </button> */}
            </div>
          </div>
        </div>
        )
      })}

        </div>
      </div>
    </section>
  );
};

export default Team;
