import React from 'react'

// components
import { LeadCard } from './LeadCard'

export const TeamLeads = () => {
    return (
        <div className='px-4 mx-auto max-w-screen-xl text-center pt-8 pb-20 lg:px-6'>
            <div className="container flex justify-center mx-auto pt-16">
                <div className='max-w-screen-sm'>
                    <p className="text-gray-500 text-lg text-center font-normal pb-3" data-aos="fade-up">BUILDING TEAM</p>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 mx-auto" data-aos="fade-up" data-aos-duration="800">
                        The Talented People Behind the Scenes of the Organization
                    </h1>
                </div>
            </div>
            <div className="w-full px-10 pt-28">
                <div className="container mx-auto">
                    <div className="grid gap-x-8 lg:gap-x-16 gap-y-28 items-center justify-center md:grid-cols-2 lg:grid-cols-3">
                        <LeadCard />
                        <LeadCard />
                        <LeadCard />
                        <LeadCard />
                        <LeadCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
