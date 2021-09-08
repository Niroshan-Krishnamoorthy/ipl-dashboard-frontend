import React,{useState,useEffect} from 'react'
import { TeamTile } from '../components/TeamTile'
import TeamService from '../services/TeamService'
import './HomePage.scss'

export const HomePage = () => {

    const [teams,setTeams] = useState([])

    useEffect(()=>{
        const fetchData =async()=>{
            const response = await TeamService.getAllTeamData()
            const data = await response.json()
            setTeams(data)
        }
        fetchData()

        return ()=>{
            setTeams([])
        }
    },[])

    return (
        <div className="HomePage">
            <div className="homepage-title">
                <h1>IPL Dashboard</h1>
            </div>
            <div className="team-grid">
            {
                teams.map(team=>(
                    <TeamTile key={team.id} teamName={team.teamName}/>
                ))
            }
            </div>
        </div>
    )
}
