import React, { Component } from 'react';
import './Team.css';
import './Pokemon.js';
import '../SimpleCard.js';
import SimpleCard from '../SimpleCard.js';

const url = 'https://poke-team-node.herokuapp.com/teams/all';

// ==================VIEWS================== \\
class TeamView extends Component {

  renderTeam() {
    return (
      this.props.teams.map( team => (
        <SimpleCard key={ team._id } props={ team } />
      ))
    )
  }

  render() {
    return this.renderTeam()
  }
}

// ==================LOGIC================== \\
class Team extends Component {
  constructor(props) {
    super(props)
    this.state ={
      teams: []
    }
  }
  
  async componentDidMount() {
    let response = await fetch(url)
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