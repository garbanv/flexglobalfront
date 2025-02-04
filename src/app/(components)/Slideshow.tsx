import React from "react";



const Slideshow = () => {
  return (
    <section
      className="relative mb-10 w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img2.rtve.es/i/?w=1600&i=01736123189181.jpg')`,
      }}
    ><div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="bg-opacity-50 absolute inset-0  mx-auto max-w-screen-xl ">
        <div className="relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-8 ">
          <div className="flex-1 text-left text-white">
            <p className="text-sm tracking-wide text-gray-300 uppercase">
              Welcome to TishInsurance
            </p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Business and Personal Insurance{" "}
            </h1>
            <p className="mt-4 text-lg sm:mt-6">
              Secure your future with our trusted insurance solutions.
            </p>
            <a
              href="#"
              className="mt-6 inline-block rounded-lg bg-blue-500 px-6 py-3 text-base font-medium text-black hover:bg-blue-600"
            >
              Read more &rarr;
            </a>
          </div>
          <div className="ml-4 flex flex-col items-center justify-center space-y-3">
            <button className="bg-opacity-80 hover:bg-opacity-100 h-10 w-10 rounded-full bg-white shadow">
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="bg-opacity-80 hover:bg-opacity-100 h-10 w-10 rounded-full bg-white shadow">
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
