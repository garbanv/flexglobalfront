import React from 'react'

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <section className=" py-24 px-4">
  <div className="container mx-auto">
  <div className="">
          <h4 className="text-center uppercase underline text-xl my-10 font-bold">
            TESTIMONIALS
          </h4>
          <h3 className="font-bold text-center text-3xl">
                Our Clients Feedback
          </h3>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
          <img 
            src="https://picsum.photos/200" 
            alt="Client" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-bold text-center mb-2">Sarah Johnson</h3>
        <p className="text-gray-500 text-sm text-center mb-4">Marketing Director</p>
        <p className="text-gray-600 italic text-center">
          &ldquo;Working with this team has been transformative for our business. Their attention to detail and creative approach is unmatched.&rdquo;
        </p>
      </div>


      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
          <img 
            src="https://picsum.photos/201" 
            alt="Client" 
            className="w-full h-full object-cover"/
          >
        </div>
        <h3 className="text-lg font-bold text-center mb-2">Michael Chen</h3>
        <p className="text-gray-500 text-sm text-center mb-4">CTO, Tech Corp</p>
        <p className="text-gray-600 italic text-center">
          &ldquo;The technical expertise and innovative solutions provided have exceeded all our expectations. Truly remarkable service!&rdquo;
        </p>
      </div>

   
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
          <img 
            src="https://picsum.photos/202" 
            alt="Client" 
            className="w-full h-full object-cover"/
          >
        </div>
        <h3 className="text-lg font-bold text-center mb-2">Emma Williams</h3>
        <p className="text-gray-500 text-sm text-center mb-4">Startup Founder</p>
        <p className="text-gray-600 italic text-center">
          &ldquo;Their support has been crucial in scaling our operations. Quick turnaround times and excellent communication throughout.&rdquo;
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Testimonials