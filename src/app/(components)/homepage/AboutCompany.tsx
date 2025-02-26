import React from 'react'
import Loader from '../Loader'

interface AboutProps {
  about?: {
  imageText: string
  imageDescriptiontext: string 
  aboutCompanyText: string
  title: string 
  description: string
  image? :{
    url: string
  }
}
}

const AboutCompany = ({about}:AboutProps) => {

  if (!about ) {
    return ''; 
  }
  return (
    <section className="my-5">
    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 mx-auto max-w-screen-xl">
      <div className="relative mx-auto max-w-xl rounded-2xl bg-white shadow-lg md:px-0 px-5">
        <div className="flex items-center justify-center bg-gray-200">
          <img
            src={(process.env.NEXT_PUBLIC_APP_URL as string)+about?.image?.url}
            alt="Family sitting on a couch"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="absolute md:right-[-30px] right-0 bottom-[-30px] z-100  bg-[#111] p-6 text-white py-10 shadow-lg " >
          <h2 className="text-lg font-bold text-center">
            {about?.imageText}
          </h2>
          <p className="text-sm text-center">CEO & Founder</p>
        </div>
      </div>
      <div className="md:px-0 px-5">
        <h3 className="underline uppercase font-bold">{about?.aboutCompanyText}</h3>
        <h4 className="text-[40px] leading-10 font-bold text-center my-5">{about?.title}</h4>
        <p>{about?.description}</p>
        <hr  className="my-5"/>
      </div>
    </div>
  </section>
  )
}

export default AboutCompany