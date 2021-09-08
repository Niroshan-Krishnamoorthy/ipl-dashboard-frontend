import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'
import teamService from '../services/TeamService'
import './TeamPage.scss';
import { BiRightArrowAlt } from "react-icons/bi";
import { CustomPieChart } from '../components/CutomPieChart'
import { BiArrowBack } from "react-icons/bi";

export const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] })

    const { teamName } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await teamService.getTeamData(teamName);
            const data = await response.json()
            setTeam(data)
        }
        fetchData()

        return () => {
            setTeam({ matches: [] })
        }

    }, [teamName])

    const wins = team.totalWins
    const losses = team.totalMatches - wins

    if (!team || !team.teamName) {
        return null
    }

    return (
        <div className="TeamPage">
            <div className="team-header">
                <Link to="/"><div className="home-page-button"><BiArrowBack className="homepage-link-icon" /> Home Page</div></Link>
                <h1 className="team-title">{team.teamName}</h1>
            </div>
            <div className="win-loss-section">
                <p>Win/Loss</p>
                <CustomPieChart wins={wins} losses={losses} />
                <div className="property-title">
                    <div><div className="color-box win-Color"> </div><p>Wins</p></div>
                    <div><div className="color-box loss-Color"> </div><p>Losses</p></div>
                </div>

            </div>
            <div className="match-detail-section">
                <h2>Latest Matches</h2>
                <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
            </div>
            {
                team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />)
            }
            <div className="more-link">
                <Link to={`/teams/${teamName}/matches/2020`}>More <BiRightArrowAlt className="link-icon" /></Link>
            </div>
        </div>
    )
}
