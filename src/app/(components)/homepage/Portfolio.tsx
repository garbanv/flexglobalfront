import React from "react";


const Portfolio = () => {
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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 my-10 ">
          <div className="">
            <img src="https://dummyimage.com/1000x1000/000/fff" className="rounded-md" alt="image" />
          </div>
          <div className="">
            <img src="https://dummyimage.com/1000x1000/000/fff" className="rounded-md" alt="image" />
          </div>
          <div className="">
            <img src="https://dummyimage.com/1000x1000/000/fff" className="rounded-md" alt="image" />
          </div>

          <div className="">
            <img src="https://dummyimage.com/1000x1000/000/fff" className="rounded-md" alt="image" />
          </div>
          <div className="">
            <img src="https://dummyimage.com/1000x1000/000/fff" className="rounded-md" alt="image" />
          </div>
          <div className="">
            <img src="https://dummyimage.com/1000x1000/000/fff" className="rounded-md" alt="image" />
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
