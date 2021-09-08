import React from 'react'
import { Link } from 'react-router-dom'
import './TeamTile.scss'

export const TeamTile = ({teamName}) => {
    return (
        <Link to={`/teams/${teamName}`}>
            <div className="TeamTile">
                <h2>{teamName}</h2>
            </div>
        </Link>
    )
}
