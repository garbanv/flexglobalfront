import Link from 'next/link'
import React from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
type Props = {}

export default function WhatWOffer({}: Props) {
  return (
    <section className="py-10  w-full ">
        <div className="max-w-screen-xl  mx-auto ">
            <div className="">
            <h4 className="text-center uppercase underline text-xl my-10 font-bold">What we offer</h4>
            <h3 className="font-bold text-center text-3xl">Great Insurance build better <br /> future together</h3>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-x-5'>
                <div className="bg-white shadow-xl p-10 rounded-md">
                <FaBagShopping size={50}/>
                    <h3 className="p-5 font-bold">Save your money</h3>
                    <p className=''> Lorem ipsum dolor sit amet consectetur.</p> 
                    <div className="my-5 flex gap-x-2 items-center" >
                    <Link href="/" className="underline ">Read more</Link>
                    <FaArrowRight />                   
                    </div>

                </div>

                <div className="bg-white shadow-xl p-10 rounded-md">
                <FaBagShopping size={50}/>
                    <h3 className="p-5 font-bold">Save your money</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p> 
                    <div className="my-5 flex gap-x-2 items-center" >
                    <Link href="/" className="underline ">Read more</Link>
                    <FaArrowRight />                   
                    </div>                  

                </div>

                <div className="bg-white shadow-xl p-10 rounded-md">
                <FaBagShopping size={50}/>
                    <h3 className="p-5 font-bold">Save your money</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>  
                    <div className="my-5 flex gap-x-2 items-center" >
                    <Link href="/" className="underline ">Read more</Link>
                    <FaArrowRight />                   
                    </div>                 

                </div>

                <div className="bg-white shadow-xl p-10 rounded-md">
                <FaBagShopping size={50}/>
                    <h3 className="p-5 font-bold">Save your money</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p> 
                    <div className="my-5 flex gap-x-2 items-center" >
                    <Link href="/" className="underline ">Read more</Link>
                    <FaArrowRight />                   
                    </div>              

                </div>

            </div>
        </div>

    </section>
  )
}