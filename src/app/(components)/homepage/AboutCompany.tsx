import React from 'react'



const AboutCompany = () => {
  return (
    <section className="my-5">
    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 mx-auto max-w-screen-xl">
      <div className="relative mx-auto max-w-xl rounded-2xl bg-white shadow-lg">
        <div className="flex items-center justify-center bg-gray-200">
          <img
            src="https://plus.unsplash.com/premium_photo-1661281211518-7bc99840fe64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Family sitting on a couch"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="absolute md:right-[-30px] right-0 bottom-[-30px] z-100  bg-[#111] p-6 text-white py-10 shadow-lg " >
          <h2 className="text-lg font-bold text-center">
            25 Years Of Experience in Insurance Services
          </h2>
          <p className="text-sm text-center">CEO & Founder</p>
        </div>
      </div>
      <div>
        <h3 className="underline uppercase font-bold">About Company</h3>
        <h4 className="text-[40px] leading-10 font-bold text-center my-5">Award insurance winning <br /> insurance since 1993</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequuntur iste voluptas explicabo error veritatis perferendis ab veniam temporibus doloremque ullam neque, quasi quod, sit optio, ad itaque necessitatibus voluptate?</p>
        <hr  className="my-5"/>
      </div>
    </div>
  </section>
  )
}

export default AboutCompany