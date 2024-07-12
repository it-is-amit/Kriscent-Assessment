"use client"
import React from 'react'

export default function Testimonials() {
    return <div className='w-screen overflow-hidden flex justify-center' style={{ backgroundColor: "#DFEBFF" }}>
        <div className="maxWidthContainer w-full h-fit sm:p-10 p-0 flex flex-col gap-5">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <p className="universalHeadings text-blue-900 font-normal">What <b>Clients</b> Say?</p>
                        <p className="universalParagraphs text-black font-normal">Discover How <b>Attach Club</b> Has Transformed <br />Their Professional Journey</p>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        <TestimonialTile imageUrl={"https://i.pravatar.cc/150?img=8"} name={"Amit Verma"} post={"React Developer"} testimonial={"Attach Club has revolutionized how we connect with our clients. The platform's intuitive interface and robust networking features have significantly boosted our business visibility."} />
                        <TestimonialTile imageUrl={"https://i.pravatar.cc/150?img=12"} name={"James"} post={"Business Owner"} testimonial={"Using Attach Club has made networking a breeze. I've received valuable inquiries and connected with like-minded professionals in my industry. Highly recommended!"} />
                        <TestimonialTile imageUrl={"https://i.pravatar.cc/150?img=32"} name={"Jane Smith"} post={"Freelancer"} testimonial={"I love how Attach Club allows me to showcase my portfolio and connect with potential clients effortlessly. It's become an essential tool in my freelance career"} />
                    </div>
                </div>
            </section>
        </div>
    </div>

}



// reusable testimonial tile
function TestimonialTile({ name, post, testimonial, imageUrl }) {
    return <div className="p-4 md:w-1/3">
        <div className="flex rounded-xl h-full bg-white p-8 flex-col gap-2">
            <div className="flex items-center w-full mb-3 gap-4">
                <div className='w-20 h-20 bg-gray-200 rounded-full overflow-hidden'>
                    <img src={imageUrl} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <p className="universalSecondaryHeadings -mb-2">{name}</p>
                    <p className="universalParagraphs text-gray-400">{post}</p>
                    <div className='flex mt-1'><Star /><Star /><Star /><Star /><Star /></div>
                </div>
            </div>
            <div className="flex-grow">
                <p className="universalParagraphs text-gray-400">{testimonial}</p>
            </div>
        </div>
    </div>
}

// a star icon
function Star() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="14px" className='text-yellow-300' viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
}