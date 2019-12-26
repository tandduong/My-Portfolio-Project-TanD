import React, {Component} from 'react';
import {Card, CardText, CardActionProps, CardActions, CardTitle, CardMenu, Button,IconButton} from 'react-mdl';

class GroupProj extends Component{
  render() {
    return (
      <div className="proj-grid">
        <Card className="card-1" shadow={5}>
          <CardTitle className="card-1-title">
            CPU-Scheduling Project
          </CardTitle>

          <CardText>
            Build the C programs for the type of CPU Scheduling Types: FCFS, SRTF, SJF, RR. 
          </CardText>

          <CardActions border>
            <Button className="card-1-button"><a href="https://github.com/tandduong/cpu-scheduling-tmd" target="_blank">GitHub</a></Button>
            <Button className="card-1-button"><a href="https://tmd-report-website.herokuapp.com" target="_blank">Demo</a></Button>
          </CardActions>

          <CardMenu className="card-1-menu">
            <IconButton name="share"/>
          </CardMenu>
        </Card>

        <Card className="card-1" shadow={5}>
          <CardTitle className="card-1-title">
            ReadIt Project
          </CardTitle>

          <CardText>
            Build the Fullstack Wensite like Reddit. I made the CSS for this Project. 
          </CardText>

          <CardActions border>
            <Button className="card-1-button"><a href="https://github.com/tulachan/cosc484projet" target="_blank">GitHub</a></Button>
            <Button className="card-1-button"><a href="#" target="_blank">Demo</a></Button>
          </CardActions>

          <CardMenu className="card-1-menu">
            <IconButton name="share"/>
          </CardMenu>
        </Card>
      </div>
    )
  }
}

export default GroupProj;