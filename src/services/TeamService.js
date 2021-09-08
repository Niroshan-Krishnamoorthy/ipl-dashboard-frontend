
const TEAM_BASE_URL = "http://localhost:8080/team/"

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