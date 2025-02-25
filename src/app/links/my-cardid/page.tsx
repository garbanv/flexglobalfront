import CardIdForm from "@/app/(components)/CardIdForm";
import React from "react";



function page() {

  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div
        id="banner"
        className="relative  w-full h-96 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1675276939507-97d222bb488d?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="relative top-40 text-white font-bold text-[50px] md:px-0 px-5">
      {/*       MY CARD ID */}
          </h3>
        </div>
      </div>
      <div className="max-w-screen-xl py-8 mx-auto  lg:py-10">
        <div className="w-full  rounded-lg  md:mt-0 sm:max-w-md xl:p-0 ">
          <CardIdForm />
        </div>
      </div>
    </section>
  );
}

export default page;
