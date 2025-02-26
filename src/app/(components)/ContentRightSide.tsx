import Link from 'next/link'
import React from 'react'
import ReactMarkdown from 'react-markdown'

type ContentProps = {
    item:{
        contentTitleLine1:string,
        contentTitleLine2:string,
        content:string,
        buttonText:string
        image:{
          url:string
        }
    }
}

const ContentRightSide = ({item}: ContentProps) => {
  return (
    <section  className="grid md:grid-cols-2 gap-20 items-center md:px-0 px-5 py-20 max-w-screen-xl mx-auto ">
     <div>
                <img src={process.env.NEXT_PUBLIC_APP_URL+item?.image.url} alt="flex global" />
              </div>
              <div>
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-[#BC9B5F]">
                    {item?.contentTitleLine1}
                  </h3>
                  <h3 className="text-3xl leading-10 font-bold text-[#BC9B5F]">
                    {item?.contentTitleLine2}
                  </h3>
                </div>
                <div id="markdownParagraph">
                  <ReactMarkdown>{item?.content}</ReactMarkdown>
                </div>

                <div className="flex justify-left py-10">
                  <Link href="/">
                    <p className="bg-[#BC9B5F] px-5 py-1 inline text-xs rounded-md uppercase text-white">
                      {item?.buttonText}
                    </p>
                  </Link>
                </div>
              </div>
    </section>
  )
}

export default ContentRightSide