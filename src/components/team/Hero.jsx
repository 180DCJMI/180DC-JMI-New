import React from 'react'
import Background from "../../assets/teambg.jpg";
import Team from "../../assets/team.jpg";

export const Hero = () => {
    return (
        <div className='w-full min-h-[90vh] flex items-center justify-center relative overflow-hidden'>
            <img src={Background} alt="teambg" className='absolute object-cover w-full h-full z-0 top-0'/>
            <div className='relative z-10 flex items-center flex-col-reverse md:flex-row gap-20 px-8 xl:px-20 md:py-20 py-32 xl:gap-40'>
                <div className='max-w-screen-sm mx-auto' data-aos="fade-up">
                    <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                    <p className="font-bold text-gray-700 text-xl">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                </div>
                <img src={Team} alt="team" className='rounded-[100%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover' data-aos="fade-up"/>
            </div>
        </div>
    )
}
