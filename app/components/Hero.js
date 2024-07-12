"use client"
import React from 'react'

export default function Hero() {
    return <div className="w-screen h-screen overflow-hidden flex justify-center">

        {/* background image */}

        <div className="w-full h-full absolute">
            <img height="100%" src="https://ik.imagekit.io/hgfugmm0dbi/Kriscent/Landing%20page%20(1)_mfzXJTjdM.webp?updatedAt=1720675520232" alt="bg image" className='w-full h-full object-cover' />
        </div>

        {/* content container */}
        <div className="maxWidthContainer flex flex-col sm:flex-row-reverse justify-center sm:items-center w-full h-full p-8 relative">
            <div className="z-10 absolute top-8 left-8">
                <img width="220px" src="https://ik.imagekit.io/hgfugmm0dbi/Kriscent/Group%202608573_LX6LIWV2g.svg?updatedAt=1720676326545" alt="icon" className='hidden md:block sm:hidden' />
                <img width="48px" src="https://ik.imagekit.io/hgfugmm0dbi/Kriscent/Union_8il3zuCsk.svg?updatedAt=1720676326478" alt="icon" className='block md:hidden sm:block' />
            </div>

            {/* paroduct imaegs container */}
            <div className="productImageContainer">
                <img src="https://ik.imagekit.io/hgfugmm0dbi/Kriscent/iPhone_14_Pro_Max_14%201_pUf8A2ai1p.png?updatedAt=1720684839131" alt="" />
            </div>

            <div className="md:w-fit md:h-fit z-10 flex flex-col items-center mt-32 sm:mt-0 sm:items-start -translate-y-32  sm:-translate-y-0">
                <div className='flex flex-col sm:items-start items-center text-white'>
                    <p className="universalHeadings sm:-mb-4 -mb-2">Connecting People, </p>
                    <p className="universalHeadings"><b>Empowering Businesses</b></p>
                </div>
                <p className="universalParagraphs sm:w-3/4 text-center sm:text-left text-white"> Showcase your services, products, and expertise to a broader audience with Attach Club. </p>
                <br />
                <button className='h-12 text-white font-medium text-sm button'> DOWNLOAD NOW</button>
            </div>
        </div>


    </div>
}

