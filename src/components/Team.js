import React, { Component } from 'react';
import './Team.css';
import './Pokemon.js';
/**
 * =====================TODO: CARDS=====================
 * import PropTypes from 'prop-types';
 * import { withStyles } from '@material-ui/core/styles';
 * import Card from '@material-ui/core/Card';
 * import CardActions from '@material-ui/core/CardActions';
 * import CardContent from '@material-ui/core/CardContent';
 * import Button from '@material-ui/core/Button';
 */

const url = 'https://poke-team-node.herokuapp.com/teams/all';

// ==================VIEWS================== \\
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