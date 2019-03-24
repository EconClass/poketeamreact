import React, { Component } from 'react';
import './Team.css';

// const baseUrl = 'https://poke-team-node.herokuapp.com/';
const devUrl = 'http://localhost:5000/'

class TeamView extends Component {
  renderTeam() {
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
  constructor(props) {
    super(props)
    this.state ={
      teams: []
    }
  }
  
  async componentDidMount() {
    let response = await fetch(devUrl + 'teams/all')
    let teamsR = await response.json()

    this.setState({ teams: teamsR.docs });
  }

  render() {
    return <TeamView teams={ this.state.teams } />
  }
}

export default Team;