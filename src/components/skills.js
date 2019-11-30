import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component{
  render(){
    return(
      <Grid>
        <Cell col={12}>
          <div className="skill-textbox">
          {this.props.skill}
            <div className="progressbar"><ProgressBar progress={this.props.progress}/>
            </div>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;