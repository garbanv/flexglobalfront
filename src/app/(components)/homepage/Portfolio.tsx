
import React from "react";

interface ProjectsProps {
  projects?: {
    heading: string;
    image: {
      image: {
        url: string;
      };
      imageLink: string;
    }[];
    sectionTitle: string;
  };
}

const Portfolio = ({ projects }: ProjectsProps) => {


  return (
    <section className="py-10  w-full ">
      <div className="max-w-screen-xl  mx-auto ">
        <div className="">
          <h4 className="text-center uppercase underline text-xl my-10 font-bold">
            {projects?.sectionTitle}
          </h4>
          <h3 className="font-bold text-center text-3xl">{projects?.heading}</h3>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 my-10 cursor-pointer ">
          {projects?.image?.map((image, index) => {
            return (
              <a href={image?.imageLink} className="" key={index}>
                <img
                  src={process.env.NEXT_PUBLIC_APP_URL + image?.image?.url}
                  className="rounded-md"
                  alt="image"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
