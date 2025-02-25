import React from "react";

interface Testimonials {
  client: string;
  clientPosition: string;
  message: string;
  image: {
    url: string;
  };
}

interface TestimonialsProps {
  testimonials?: {
    heading: string;
    testimonialsCard: Testimonials[];
    testimonialsText: string;
  };
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {

  if(!testimonials){
      return 'no testimonials yet'
  }
  return (
    <section className=" py-24 px-4">
      <div className="container mx-auto">
        <div className="">
          <h4 className="text-center uppercase underline text-xl my-10 font-bold">
            {testimonials?.testimonialsText}
          </h4>
          <h3 className="font-bold text-center text-3xl">
            {testimonials?.heading}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.testimonialsCard.map((testimonial, index) => {
            return (
              <div
                className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg"
                key={index}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={process.env.NEXT_PUBLIC_APP_URL + testimonial?.image?.url}
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  {testimonial.client}
                </h3>
                <p className="text-gray-500 text-sm text-center mb-4">
                  {testimonial.clientPosition}
                </p>
                <p className="text-gray-600 italic text-center">
                  {`" ` + testimonial.message + ` "`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
