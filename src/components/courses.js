import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Courses extends Component{
  render(){
    return(
      <Grid>
        <Cell className="exp-left" col={4}>
          <p>{this.props.startDate} - {this.props.endDate}
          </p>
        </Cell>

        <Cell className="exp-right" col={8}>
          <p>{this.props.courseDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Courses;