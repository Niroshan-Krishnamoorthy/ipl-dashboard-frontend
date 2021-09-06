import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'
import teamService from '../services/TeamService'

export const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] })

    const {teamName} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await teamService.getTeamData(teamName);
            const data = await response.json()
            setTeam(data)
        }
        fetchData()

    }, [teamName])

    if(!team || !team.teamName){
        return <h1> Team Not Found! </h1>
    }

    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
            {
                team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match}/>)
            }
        </div>
    )
}
