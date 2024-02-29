import React from 'react'

function HeroSection() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Connecting Hearts, 
                            <br class="hidden lg:inline-block" />Nourishing Communities
                        </h1>
                        <p class="mb-8 leading-relaxed">Our mission addresses the critical issue of food waste by connecting volunteers with hotels and restaurants to redistribute surplus food to those in need, combating hunger and fostering community support.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Feed</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="volunteer.jpg" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
