"use client";
import { useState, useEffect, useRef,use } from "react";

const servicesData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1517554558809-9b4971b38f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Business Insurance",
    description: "Protect your business from unexpected events.",
    tagline: "Securing Your Dreams",
    link: "/business-insurance",
    linkText: "Get a Quote",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661335273735-28702a0e32a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URLs
    title: "Personal Insurance",
    description: "Protect yourself and your loved ones.",
    tagline: "Your Peace of Mind",
    linkText: "Get a Quote",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Home Insurance",
    description: "Protect your home and belongings.",
    tagline: "Safe at Home",
    link: "/home-insurance",
    linkText: "Get a Quote",
  },
  // ... more services
];

interface SlideshowProps {
  slides: {
    callToAction: string;
    heading: string;
    id: number;
    link: string;
    subheading: string;
    image: {
      url: string;
    };
  }[];
}

const Slideshow = ({ slides }: SlideshowProps) => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides?.length);
    }, 5000);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [slides?.length]);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides?.length) % slides?.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides?.length);
  };

  if (!slides || slides?.length === 0) {
    return <div>No services to display.</div>; // Handle empty services array
  }

  const currentService = slides[currentSlide];

  return (
    <section
      className="relative mb-10 w-full h-screen bg-cover bg-center transition-all duration-500 bg-fixed" // Added transition
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_APP_URL}${currentService?.image?.url})`, // Dynamic image URL
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80 transition-all duration-500"></div>{" "}
      {/* Added transition */}
      <div className="bg-opacity-50 absolute inset-0 mx-auto max-w-screen-xl transition-all duration-500">
        {" "}
        {/* Added transition */}
        <div className="relative z-5 flex h-full items-center px-4 sm:px-6 lg:px-8 transition-all duration-500">
          {" "}
          {/* Added transition */}
          <div className="flex-1 text-left text-white transition-all duration-500">
            {" "}
            {/* Added transition */}
            <p className="text-sm tracking-wide text-gray-300 uppercase transition-all duration-500">
              {" "}
              {/* Added transition */}
              {currentService?.subheading || "Welcome to FlexGlobal"}{" "}
              {/* Display tagline or default */}
            </p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl transition-all duration-500">
              {" "}
              {/* Added transition */}
              {currentService?.heading} {/* Dynamic title */}
            </h1>
            {/*  <p className="mt-4 text-lg sm:mt-6 transition-all duration-500">
             
              {currentService?.description} 
            </p> */}
            <a
              href={currentService?.link || "#"} // Dynamic link or default
              className="mt-6 inline-block rounded-lg bg-[#654C21] font-bold px-6 py-3 hover:bg-black text-base font-medium text-white  transition-all duration-500" // Added transition
            >
              {currentService?.callToAction}{" "}
              {/* Dynamic link text or default */}
            </a>
          </div>
          <div className="ml-4 flex flex-col items-center justify-center space-y-3 transition-all duration-500">
            {" "}
            {/* Added transition */}
            <button
              className="bg-opacity-80 hover:bg-opacity-100 h-10 w-10 rounded-full bg-white shadow"
              onClick={handlePrevSlide}
            >
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
            <button
              className="bg-opacity-80 hover:bg-opacity-100 h-10 w-10 rounded-full bg-white shadow"
              onClick={handleNextSlide}
            >
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
