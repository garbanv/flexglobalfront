"use client";
import { useState, useEffect, useRef, use, startTransition } from "react";
import Loader from "./Loader";
import { useInView } from "react-intersection-observer";

interface SlideshowProps {
  slides?: {
    callToAction: string;
    heading: string;
    id: number;
    link: string;
    subHeading: string;
    image: {
      url: string;
    };
  }[];
}

const Slideshow = ({ slides }: SlideshowProps) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true,
  });

  

  const { ref:btnRef, inView:btnRefCta} = useInView({
    /* Optional options */
   /*  threshold: 1, */
    triggerOnce: true,
    delay: 1000,
  });

  const slideRef = useRef<HTMLElement>(null);
  const titleRef = ref;


  const [currentSlide, setCurrentSlide] = useState(0);


/*   useEffect(() => {
    const intervalId = setInterval(() => {
      
        slides
          ? setCurrentSlide((prevSlide) => (prevSlide + 1) % slides?.length)
          : setCurrentSlide(0);
      
    }, 5000);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [slides?.length]); */

  const handlePrevSlide = () => {
    startTransition(() => {
      
        slides
          ? setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides?.length) % slides?.length
            )
          : setCurrentSlide(0);
      
    });
  };

  const handleNextSlide = () => {
    startTransition(() => {
      
        slides
          ? setCurrentSlide((prevSlide) => (prevSlide + 1) % slides?.length)
          : setCurrentSlide(0);
      
    });
  };
  useEffect( () => {
    const elements = document.querySelectorAll('#slideRef')
    elements.forEach((element) => {
      element.classList.remove('slide-top')
      setTimeout(() => {
        element.classList.add('slide-top')
      }, 10)
    })

    const ctaButn= document.querySelector('#btnRef')
    ctaButn?.classList.remove('slide-top')
    setTimeout(() => {
      ctaButn?.classList.add('slide-top')
    }, 300)

   }, [currentSlide]);
   
  if (!slides) {
    return <Loader />;
  }

  const currentService = slides[currentSlide];




  return (
    <section id="slideshow"
      className="relative  w-full h-[600px] bg-cover bg-center transition-all duration-500 overflow-hidden" // Added transition
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
            <div className="flex gap-x-5 items-center place-items-center">
            <div id="slideRef" className={`text-white w-20 h-10 border-b relative -top-4 ${ inView ? "slide-top" : ""}`} ref={titleRef || slideRef}></div>
            <p
              id="slideRef"
              ref={titleRef || slideRef}
              className={`text-sm tracking-wide text-gray-300 uppercase transition-all duration-500 ${ inView ? "slide-top" : ""}`}
            >
              
              {/* Added transition */}
              {currentService?.subHeading || "Welcome to FlexGlobal"}
              {/* Display tagline or default */}
            </p>
            </div>
            <h1 id="slideRef"
              ref={titleRef || slideRef}
              className={`mt-4 text-4xl w-1/2 sm:text-5xl lg:text-6xl transition-all duration-500 font-extrabold ${inView ? "slide-top" : ""}`}
            >
              {" "}
              {/* Added transition */}
              {currentService?.heading} {/* Dynamic title */}
            </h1>
            {/*  <p className="mt-4 text-lg sm:mt-6 transition-all duration-500">
             
              {currentService?.description} 
            </p> */}
            <a id="btnRef"
              ref={btnRef}
              href={currentService?.link || "#"} // Dynamic link or default
              className={`mt-6 inline-block rounded-lg bg-[#654C21] font-bold px-6 py-3 hover:bg-black text-base font-medium text-white  transition-all duration-500 ${
                btnRefCta ? "slide-top" : ""
              }`} // Added transition
            >
              {/*  {currentService?.callToAction}{" "} */}
              Get a quote
            </a>
          </div>
          <div className="ml-4 flex flex-col items-center justify-center space-y-3 transition-all duration-500">
            {" "}
            {/* Added transition */}
            <button 
              ref={titleRef}
              className={`bg-opacity-80 hover:bg-opacity-100 h-10 w-10 rounded-full bg-white shadow ${
                inView ? "slide-top" : ""
              }`}
              onClick={handlePrevSlide}
      
            >
              <span className="sr-only">Previous</span>
              <svg
                id="slideshowPrevButton"
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
                    ref={titleRef}
              className={`bg-opacity-80 hover:bg-opacity-100 h-10 w-10 rounded-full bg-white shadow ${
                inView ? "slide-top" : ""
              }`}
              onClick={handleNextSlide}
            >
              <span className="sr-only">Next</span>
              <svg
                id="slideshowNextButton"
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
