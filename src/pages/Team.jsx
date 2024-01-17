import React from 'react'

// components
import { TeamLeads } from '../components/team/TeamLeads'
import { TeamMembers } from '../components/team/TeamMembers'
import { Hero } from '../components/team/Hero';

export const Team = () => {
    return (
        <div>
            <Hero />
            <TeamLeads />
            <TeamMembers />
        </div>
    )
}
