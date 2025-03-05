"use client";
import React, { useEffect, useState } from "react";
import PagesTopBanner from "../(components)/PagesTopBanner";
import localeStore from "../(stores)/languageStore";
import Team from "../(components)/homepage/Team";
import { getAboutData } from "../utils/data";
import { AboutTypes } from "../utils/aboutTypes";
const AboutPage = () => {
  const lang = localeStore((state) => state.locale);


 const [data,setAboutData] = useState<AboutTypes | null>(null);
    const [isLoading, setIsLoading] = useState(false);




    const [error,setError]=useState<string>('')
    useEffect(() => {
      try {
        getAboutData({setAboutData, setIsLoading, lang});
      } catch (error) {
        setError("An error occurred while fetching data.")
      }
        
      }, [lang]);
      console.log("servidesData", data);


  return (
    <main>
      <PagesTopBanner
        /* image={ "https://res.cloudinary.com/dwcqgwvxa/image/upload/v1741023083/BANNER_TOP_LANDING_1_4caf86edb6.png"} */
        image={data ? data?.featuredImage?.url :''}
        heading1={lang === "en" ? "About" : "Nosotros"}
        heading2={lang === "en" ? "Us" : ""}
      />
      <div className="max-w-screen-xl mx-auto ">
        <section>
          <div className="grid md:grid-cols-2 gap-4 items-center justify-center grid-cols-1">
            <div>
              <img src="/about.png" width={'500px'} height={'500px'}alt="" />
            </div>
            <div>
              <div className="flex gap-x-5 items-center place-items-center">
              {/*   <div id="slideRef" className={`text-black w-20 h-10 border-b border-black relative -top-4 `}></div> */}
                <h3 className="text-3xl font-bold text-[#BC9B5F] my-5">
                  {lang === "en" ? "About Us" : "Nosotros"}
                </h3>
              </div>
              <p>
                FLEX GLOBAL es una empresa que se esfuerza para brindarte la
                mejor comunicación y experiencia de nuestros servicios para
                aprovechar los programas de salud y atención medica. Estamos
                alineados con la reforma de OMABACARE destinada a hacer el
                seguro médico más accesible y asequible para poder inscribir a
                los individuos y familias a una compañía de salud a bajo costo.{" "}
              </p>{" "}
              <br />
              <p>
                Nuestro propósito es mostrar las ventajas y beneficios de
                obtener un seguro medico que se adapte a las necesidades de
                nuestros clientes dando una experiencia reconfortante y segura.
              </p>
              <br />
              <p>
                Te proporcionamos la información precisa sobre tu cobertura y
                ofrecemos asesoría personalizada, respaldada por los mejores
                agentes del mercado.{" "}
              </p>
            </div>
          </div>
          {/* <h1 className="text-3xl font-bold text-center mb-10">About Us</h1> */}
        </section>
        <section>
          <div>


            <Team team={data?.team}  />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
