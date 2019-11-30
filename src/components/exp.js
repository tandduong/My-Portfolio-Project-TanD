import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component{
  render(){
    return(
      <Grid>
        <Cell className="exp-left" col={4}>
          <p>{this.props.startDate} - {this.props.endDate}
          </p>
        </Cell>

        <Cell className="exp-right" col={8}>
          <h4>{this.props.jobName}
          </h4>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;