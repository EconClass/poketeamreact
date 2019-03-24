import React, { Component } from 'react';
import './Team.css';

class TeamView extends Component {
  renderTeam() {
    console.log(this.props)
    return (
      this.props.teams.map( team => (
        <div>
          <h3>{team.name}</h3>
        </div>
      ))
    )
  }

  render() {
    return this.renderTeam()
  }

}
class Team extends Component {
  state = {
    teams: [
      {
        name: "team1"
      },{
        name: "team2"
      },{
        name: "team3"
      },{
        name: "team4"
      },{
        name: "team5"
      },{
        name: "team6"
      },{
        name: "team7"
      },{
        name: "team8"
      },{
        name: "team9"
      }
    ]
  }
  render() {
    return <TeamView teams={this.state.teams} />
  }
}

export default Team;