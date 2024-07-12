import React from 'react'

export default function Features() {
    return (
        <div className='w-screen overflow-hidden flex justify-center' style={{ backgroundColor: "#DFEBFF" }}>
            <div className="maxWidthContainer w-full h-fit p-10 flex flex-col gap-5">

                <FeatureTile
                    illustration={"https://ik.imagekit.io/hgfugmm0dbi/Kriscent/Profile%20pic-pana%201_4rAgNDm_tP.svg?updatedAt=1720695027215"}
                    primaryText={"Create Your Digital Identity"}
                    secondaryText={"Easily build a dynamic profile that showcases who you are and what you do."}
                />

                <FeatureTile
                    reverse={true}
                    illustration={"https://ik.imagekit.io/hgfugmm0dbi/Kriscent/Shopping%20bag-pana%20(1)%201_966SsLRxlf.svg?updatedAt=1720695027145"}
                    primaryText={"Showcase Your Product Catalogue"}
                    secondaryText={"Display your products in an organized and attractive manner, making it easier for clients to discover what you offer."}
                />
                <FeatureTile
                    illustration={"https://ik.imagekit.io/hgfugmm0dbi/Kriscent/Online%20connection-pana%201_8rQjJZ-GI.svg?updatedAt=1720695027432"}
                    primaryText={"Expand Your Professional Network"}
                    secondaryText={"Connect with like-minded professionals and grow your business connections effortlessly."}
                />
            </div>
        </div>
    )
}


// reusable tile of feature
function FeatureTile({ illustration, reverse, primaryText, secondaryText }) {
    return <div className='w-full h-fit pt-9 pb-9 rounded-xl relative overflow-hidden flex flex-row items-center justify-center' style={{ backgroundColor: "#D3E4FF" }}>

        {/* inside content of the tile */}
        <div className={`w-4/5 h-full flex ${reverse ? "flex-row-reverse" : "flex-row"} items-center gap-10 z-10`}>
            <div style={{ width: '200px', height: '200px', minWidth: "200px" }} className='sm:flex justify-center items-center hidden'>
                <img src={illustration} alt="" />
            </div>
            <div>
                <p className="universalSecondaryHeadings">{primaryText}</p>
                <p className="universalParagraphs text-slate-950 sm:w-3/4">{secondaryText}</p>
            </div>
        </div>

        {/* decorations */}
        <img className='absolute -top-10 -right-20 opacity-35 sm:opacity-100' src="https://ik.imagekit.io/hgfugmm0dbi/Kriscent/Union_8hl5L6P7_.svg?updatedAt=1720693503196" alt="" />
        <img className='absolute -bottom-20 -left-20 opacity-35 sm:opacity-100' src="https://ik.imagekit.io/hgfugmm0dbi/Kriscent/Union_8hl5L6P7_.svg?updatedAt=1720693503196" alt="" />
    </div>
}