import React from 'react'

export default function Contact() {
    return <section style={{ backgroundColor: "#DFEBFF" }}>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <div className="flex flex-col text-center w-full mb-20 font-normal">
                <h2 className="universalHeadings text-center text-indigo-800">Get in <b>touch</b> with us</h2>
                <p className="universalParagraphs text-black">Explore Our <b>Plans</b> to Enhance Your Professional Network and Business Visibility</p>
            </div>

            <form className="space-y-8" method="post">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Name</label>
                    <input type="name" id="name" className="shadow-sm h-14 bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 font-normal dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="What is your good name? " required />
                </div>
                <div>
                    <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                    <input type="email" id="email" className="shadow-sm h-14 bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-normal dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your e-mail here" required />
                </div>
                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-none focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-normal dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your message here..."></textarea>
                </div>
                <button type='submit' className="flex items-center justify-center mt-auto text-white bg-indigo-900 border-0 py-2 px-4 w-fit focus:outline-none hover:bg-blue-800 rounded-full">Send Message </button>
            </form>

        </div>
    </section >
}
