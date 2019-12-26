import React, {Component} from 'react';
import {Card, CardText, CardActionProps, CardActions, CardTitle, CardMenu, Button,IconButton} from 'react-mdl';

class IndividualProj extends Component{
  render() {
    return (
      <div className="proj-grid">
        <Card className="card-1" shadow={5}>
          <CardTitle className="card-1-title">
            Portfolio Project
          </CardTitle>

          <CardText>
            Build the portfolio by using HTML, CSS, JSX, React and  React-MDL. Finished in November 2019 
          </CardText>

          <CardActions border>
            <Button className="card-1-button"><a href="https://github.com/tandduong/My-Portfolio-Project-TanD" target="_blank">GitHub</a></Button>
            <Button className="card-1-button"><a href="https://portfolio-tan.herokuapp.com/" target="_blank">Demo</a></Button>
          </CardActions>

          <CardMenu className="card-1-menu">
            <IconButton name="share"/>
          </CardMenu>
        </Card>

        <Card className="card-1" shadow={5}>
          <CardTitle className="card-1-title">
            Project #2
          </CardTitle>

          <CardText>
            Update soon... 
          </CardText>

          <CardActions border>
            <Button className="card-1-button"><a href="#" target="_blank">GitHub</a></Button>
          </CardActions>

          <CardMenu className="card-1-menu">
            <IconButton name="share"/>
          </CardMenu>
        </Card>

        <Card className="card-1" shadow={5}>
          <CardTitle className="card-1-title">
            Project #3
          </CardTitle>

          <CardText>
           Update soon... 
          </CardText>

          <CardActions border>
            <Button className="card-1-button"><a href="#" target="_blank">GitHub</a></Button>
          </CardActions>

          <CardMenu className="card-1-menu">
            <IconButton name="share"/>
          </CardMenu>
        </Card>
      </div>
    )
  }
}

export default IndividualProj;