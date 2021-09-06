import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard'
import TeamService from '../services/TeamService'



export const MatchPage = () => {

    const [matches,setMatches] = useState([])
    const {teamName, year} = useParams(); 

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await TeamService.getMatchDataForYear(teamName,year)
            const data = await response.json()
            setMatches(data)
        }
        fetchData()

    },[teamName,year])

    return (
        <div>
            <h1>Match Page</h1>
            {
                matches.map(match=> <MatchDetailCard teamName={teamName} match={match}/>)
            }
        </div>
    )
}
