"use client";
import { useEffect, useState,useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import TopHeader from "./TopHeader";
import Link from "next/link";
import localeStore from "../(stores)/languageStore";
import { usePathname } from 'next/navigation'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const lang = localeStore((state)=>state.locale)
  
const pathname = usePathname()
const ref = useRef(null)

  const updateLang = localeStore((state)=>state.updateLocale)

  const navigationOptions = [
    {
      id: 1,
      label: lang === 'en' ? 'Home':'Inicio',
      link: "/",
      subItems: [
        {
          id: 1,
          label: "Home",
          link: "/",
        },
        {
          id: 2,
          label: "About",
          link: "/about",
        },
        {
          id: 3,
          label: "Services",
          link: "/services",
        },
        {
          id: 4,
          label: "Contact",
          link: "/contact",
        },
      ],
    },
    {
      id: 2,
      label: lang === 'en' ? 'Health Plans':'Planes de salud',
      link: "/health-plans",
      subItems: [
        {
          id: 1,
          label: "Home",
          link: "/",
        },
        {
          id: 2,
          label: "About",
          link: "/about",
        },
        {
          id: 3,
          label: "Services",
          link: "/services",
        },
        {
          id: 4,
          label: "Contact",
          link: "/contact",
        },
      ],
    },
    {
      id: 3,
      label: lang === 'en' ? 'Services':'Servicio',
      link: "/services",
      subItems: [
        {
          id: 1,
          label: "Home",
          link: "/",
        },
        {
          id: 2,
          label: "About",
          link: "/about",
        },
        {
          id: 3,
          label: "Services",
          link: "/services",
        },
        {
          id: 4,
          label: "Contact",
          link: "/contact",
        },
      ],
    },
    {
      id: 3,
      label: "Links",
      link: "/link",
      subItems: [
        {
          id: 1,
          label: "Home",
          link: "/",
        },
        {
          id: 2,
          label: "About",
          link: "/about",
        },
        {
          id: 3,
          label: "Services",
          link: "/services",
        },
        {
          id: 4,
          label: "Contact",
          link: "/contact",
        },
      ],
    },
    {
      id: 4,
      label: "Aboout",
      link: "/about",
      subItems: [
        {
          id: 1,
          label: "Home",
          link: "/",
        },
        {
          id: 2,
          label: "About",
          link: "/about",
        },
        {
          id: 3,
          label: "Services",
          link: "/services",
        },
        {
          id: 4,
          label: "Contact",
          link: "/contact",
        },
      ],
    },
    {
      id: 5,
      label: lang === 'en' ? 'Recurses':'Recursos',
      link: "/recurses",
      subItems: [
        {
          id: 1,
          label: "Home",
          link: "/",
        },
        {
          id: 2,
          label: "About",
          link: "/about",
        },
        {
          id: 3,
          label: "Services",
          link: "/services",
        },
        {
          id: 4,
          label: "Contact",
          link: "/contact",
        },
      ],
    },
  ];

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [recursesDropdownOpen, setRecursesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [linksDropdownOpen, setLinksDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleLinksDropdown = () => {
    setLinksDropdownOpen(!linksDropdownOpen);
  };

const servicesNav = [

{
  id:2,
  link:'/services#services',
  text:lang ==='en' ? 'best insurance plan':'mejor plan de seeguro'
  }
  ,
  {
id:3,
link:'/services#services',
text:lang ==='en' ? 'Benefits of your insurance':'beneficios de tu seguro'
},

  {
    id:5,
    link:'/services#services',
    text:lang ==='en' ? 'Plan medical visit':'agenda una cita médica'
    },
    {
      id:6,
      link:'/services#services',
      text:lang ==='en' ? 'Search doctors and hospitals':'Busca médicos y hospitales'
      },
      {
        id:7,
        link:'/team',
        text:lang ==='en' ? 'Team agents':'Equipo de agentes'
        }
  ]


  return (
    <nav className="bg-white  dark:bg-gray-900  w-full z-20 top-0  ">
        <TopHeader />

      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto px-5 md:px-0 md:py-4">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse py-2">
          <button
            type="button"
            className="text-white flex gap-x-3 items-center bg-[#BC9B5F] hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-500"
          >
            Get a quote <FaArrowRight />
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex absolute right-5 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col w-full p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 ${pathname==='/'?'text-yellow-700':'text-black'}  bg-gray-50 rounded-sm md:bg-transparent hover:text-yellow-700 hover:text-yellow-700 `}
                aria-current="page"
                ref={ref}
                onClick={(e)=>console.log("ref.current",ref.current)}
              >
                {lang === 'en' ? 'Home':'Inicio'}
              </Link>
            </li>
            {/* <li>
              <Link
                href="/health-plans"
                className={`block py-2 px-3 ${pathname==='/health-plans'?'text-yellow-700':'text-black'} bg-gray-50 rounded-sm md:bg-transparent hover:text-yellow-700  `}
                aria-current="page"
               
              >
                {lang === 'en' ? 'Health Plans':'Planes de salud'}
              </Link>
            </li> */}
            <li>
            <div className={`block py-2 px-3 ${pathname==='/links'?'text-yellow-700':'text-black'} bg-gray-50 rounded-sm md:bg-transparent hover:text-yellow-700`} >
              <button
                onClick={toggleAboutDropdown}
                className={`${pathname.includes('health-plans')?'text-yellow-700':'text-black'} flex items-center block py-2 px-3 hover:text-yellow-700 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0   `}
              >
                Health Plans
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    aboutDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              </div>
              {aboutDropdownOpen && (
                <ul className="ml-4 md:ml-0 md:absolute z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg "
                onMouseLeave={()=>setAboutDropdownOpen(!aboutDropdownOpen)}>
                  <Link href="/health-plans#Obamacare (ACA)"
                  scroll={true}
                  className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
                      Obamacare (ACA)
                  </Link>

                  <Link href="/health-plans#Individual and Family plans"
                  scroll={true}
                  className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
                      Individual and Family plans
                  </Link>
                  <Link href="/health-plans#Medicare and Medacaid"
                  scroll={true}
                  className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
                      Medicare and Medacaid
                  </Link>
              
                </ul>
              )}
            </li>
            <li>
            <div className={`block py-2 px-3 ${pathname==='/links'?'text-yellow-700':'text-black'} bg-gray-50 rounded-sm md:bg-transparent hover:text-yellow-700`} >
              <button
                onClick={toggleServicesDropdown}
                className={`${pathname==='/services'?'text-yellow-700':'text-black'} flex items-center block py-2 px-3 hover:text-yellow-700 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0   `}
              >
                {lang ==='en' ? 'Services':'Servicios'}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              </div>
              {servicesDropdownOpen && (
                <ul className="ml-4 md:ml-0 md:absolute z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg "
                onMouseLeave={()=>setServicesDropdownOpen(!servicesDropdownOpen)}>
                 {servicesNav.map((service,index)=>{
                  return (
                    <Link href={service.link} key={index}
                    scroll={true}
                    className="block uppercase py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
                        {service.text}
                    </Link>
                  )
                 })}

                  
              
                </ul>
              )}
            </li>
           {/*  <li>
              <Link
                href="/services"
                className={`block py-2 px-3 ${pathname==='/services'?'text-yellow-700':'text-black'} bg-gray-50 rounded-sm md:bg-transparent hover:text-yellow-700 `}
              >
                {lang === 'en'? 'Services':'Servicios'}  
              </Link>
            </li> */}
            <li>
              <div className={`block py-2 px-3 ${pathname.includes('links')?'text-yellow-700':'text-black'} bg-gray-50 rounded-sm md:bg-transparent hover:text-yellow-700`} >
              <button
                onClick={toggleLinksDropdown}
                className={`${pathname.includes('links')?'text-yellow-700':'text-black'} flex items-center block py-2 px-3 hover:text-yellow-700 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0   `}
              >
                Links
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    linksDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              </div>
              {linksDropdownOpen && (
                <ul className="ml-4 md:ml-0 md:absolute z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg "
                onMouseLeave={()=>setLinksDropdownOpen(!linksDropdownOpen)}>
                  <li >
                    <Link
                      href="/links/my-cardid"
                      className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
                      
                    >
                      My CardId
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/links/contact-us"
                      className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 rounded-md dark:hover:bg-gray-700"
                    >
                      Complaints and suggestions
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 ${pathname==='/about'?'text-yellow-700':'text-black'} bg-gray-50 rounded-sm md:bg-transparent hover:text-yellow-700`} 
              >
                {lang === 'en' ? 'About':'Acerca de'}
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className={`block py-2 px-3 ${pathname==='/resources'?'text-yellow-700':'text-black'} bg-gray-50 rounded-sm md:bg-transparent hover:text-yellow-700 `}
              >
                {lang === 'en'? 'Resources':'Recursos'}
              </Link>
            </li>
            <li className="block py-2 px-3 text-black bg-gray-50 rounded-sm md:bg-transparent " onClick={()=>updateLang('es')}>ES</li>
            <li className="block py-2 px-3 text-black bg-gray-50 rounded-sm md:bg-transparent " onClick={()=>updateLang("en")}>EN</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
