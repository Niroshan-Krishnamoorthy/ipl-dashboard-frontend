import React from 'react'
import { Link } from 'react-router-dom';
import "./YearSelector.scss"


export const YearSelector = ({ teamName }) => {

    let matchYears = [];
    let startYear = process.env.REACT_APP_DATA_START_YEAR
    let endYear = process.env.REACT_APP_DATA_END_YEAR

    for (let year = startYear; year <= endYear; year++) {
        matchYears.push(year)
    }

    return (
        <div className="YearSelector">
            <h3>Select Year</h3>
            <ul>
                {
                    matchYears.map(matchYear => (
                        <li key={matchYear}>
                            <Link to={`/teams/${teamName}/matches/${matchYear}`}>
                                <button className="year-button">{matchYear}</button>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
