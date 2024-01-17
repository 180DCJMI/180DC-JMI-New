import React, { useState } from 'react'
import Select from "react-select";

// components
import { TeamCard } from './TeamCard';

export const TeamMembers = () => {
    const [selectedTags, setSelectedTags] = useState("All");
    const teamTabs = [
        {
            name: "All",
            tag: "All",
        },
        {
            name: "Speakers",
            tag: "Speaker",
        },
        {
            name: "Organizing Team",
            tag: "Organizing",
        },
        {
            name: "Technical Team",
            tag: "Technical",
        },
        {
            name: "Design Team",
            tag: "Design",
        },
        {
            name: "Social Media & Content Team",
            tag: "Social_Media_And_Content",
        },
        {
            name: "Outreach Team",
            tag: "Outreach",
        },
    ];

    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" data-aos="fade-up">Our team</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400" data-aos="fade-up" data-aos-duration="800">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                    <div className="flex justify-center items-center mt-6" data-aos="fade-up">
                        <Select
                            className="w-64 dark:text-white"
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary25: "#73b744",
                                    primary: "#81B739",
                                    primary50: "#90c03e",
                                },
                            })}
                            isSearchable={false}
                            options={teamTabs.map((tab) => {
                                return {
                                    label: tab.name,
                                    value: tab.tag,
                                };
                            })}
                            value={{
                                label: teamTabs.find((tab) => tab.tag === selectedTags)?.name,
                                value: selectedTags,
                            }}
                            onChange={(selected) => {
                                setSelectedTags(selected.value);
                            }}
                        />
                    </div>
                </div>
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
            </div>
        </section>
    )
}
