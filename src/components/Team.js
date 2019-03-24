import React, { Component } from 'react';
import './Team.css';
import './Pokemon.js'
const baseUrl = 'https://poke-team-node.herokuapp.com/';
// const devUrl = 'http://localhost:5000/'

class TeamView extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     expanded: false
  //   }
  // }

  renderTeam() {
    return (
      this.props.teams.map( team => (
        <div className='grid-item'>
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
    let response = await fetch(baseUrl + 'teams/all')
    let teamsR = await response.json()

    this.setState({ teams: teamsR.docs });
  }

  render() {
    return (
      <div className='grid-container'>
        <TeamView teams={ this.state.teams } />
      </div>
    )
  }
}

export default Team;