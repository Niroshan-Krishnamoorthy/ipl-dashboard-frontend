
const TEAM_BASE_URL = "https://ipl-spring-app.herokuapp.com/team/"

class TeamService {

    getAllTeamData(){
        return fetch(TEAM_BASE_URL)
    }

    getTeamData = (teamName) => {
        return fetch(TEAM_BASE_URL+teamName)
    }

    getMatchDataForYear(teamName,year){
        return fetch(TEAM_BASE_URL+teamName+'/matches?year='+year)
    }
}

export default new TeamService()