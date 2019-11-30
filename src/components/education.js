import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
  render(){
    return(
      <Grid>
        <Cell className="edu-left" col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>

        <Cell className="edu-right" col={8}>
          <h4>{this.props.schoolName}
          </h4>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;