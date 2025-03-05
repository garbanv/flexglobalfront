import React from "react";

interface ServiceData {
  service: {
    id?: number;
    description: string;
    link: string;
    title: string;
    image: {
      url: string;
    };
  };
}

const ServiceCard = ({ service }: ServiceData) => {
  return (
    <div className="max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={service.image.url} alt="" />
      </a>
      <div className="p-5 flex flex-col flex-grow">

          <h5 className="mb-2 text-[24px] font-bold tracking-tight text-[15px]">
            {service.title}
          </h5>

        <p className="mb-3 text-sm flex-grow">
          {service.description}
        </p>
        <div className="mt-auto"> 
        {/*   <a
            href="#"
            className="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;