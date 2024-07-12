import React from 'react'

export default function Plans() {
    return <section className=" body-font overflow-hidden" style={{ backgroundColor: "#DFEBFF" }}>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <p className="universalHeadings text-indigo-800 font-normal">Plans & <b>Pricing</b></p>
                <p className="universalParagraphs text-black font-normal">Explore Our <b>Plans</b> to Enhance Your Professional Network and Business Visibility</p>
            </div>


            <div className="flex justify-center sm:flex-row flex-col -m-4">
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                        <h1 className="text-4xl mb-5">Free</h1>

                        <Feature title={"Unlimited User Search"} />
                        <Feature title={"Connects With User"} />

                    </div>
                </div>
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-indigo-800 flex flex-col relative overflow-hidden">
                        <span className="bg-indigo-800 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">PREMIUM</span>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>₹ 199</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>


                        {/* features */}
                        <Feature title={"Unlimited User Search"} />
                        <Feature title={"Connects With User"} />
                        <Feature title={"Detailed Analytics"} isPremium/>
                        <Feature title={"Social Greetings"} isPremium/>
                        <Feature title={"Products Display"} isPremium/>

                        <br />

                        <button className="flex items-center justify-center mt-auto text-white bg-indigo-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-800 rounded-full">Upgrade Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


function Feature({ title, isPremium }) {
    return <p className={`flex items-center ${isPremium ? "text-indigo-800" : "text-gray-600"} mb-2 font-light`}>
        <span className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${isPremium ? "bg-indigo-800" : "bg-gray-400"} text-white rounded-full flex-shrink-0`}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
            </svg>
        </span>{title}
    </p>
}
