import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard'
import { YearSelector } from '../components/YearSelector'
import TeamService from '../services/TeamService'
import './MatchPage.scss'


export const MatchPage = () => {

    const [matches, setMatches] = useState([])
    const { teamName, year } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await TeamService.getMatchDataForYear(teamName, year)
            const data = await response.json()
            setMatches(data)
        }
        fetchData()

    }, [teamName, year])

    return (
        <div className="MatchPage">
            <div className="year-select">
                <YearSelector teamName={teamName} />
            </div>
            <div>
                <h1 className="matchPage-title">{`${teamName} matches for year ${year}`}</h1>
                {matches.length === 0 ?
                    <div className="no-match-div">{`No Matches for ${year}`} </div>
                    : (
                        matches.map(match => <MatchDetailCard teamName={teamName} match={match} />)

                    )}

            </div>
        </div>
    )
}
