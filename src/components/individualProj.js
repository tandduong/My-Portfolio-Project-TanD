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
            Llama Powers Project
          </CardTitle>

          <CardText>
          Built a website for sharing an information of the Llama; Developed by HTML5, CSS3 for the visual design; Added JavaScript for effects. 

          </CardText>

          <CardActions border>
            <Button className="card-1-button"><a href="https://github.com/tandduong/llama-challenge" target="_blank">GitHub</a></Button>
            <Button className="card-1-button"><a href="https://llqa-b2e4c.firebaseapp.com/" target="_blank">Demo</a></Button>
          </CardActions>

          <CardMenu className="card-1-menu">
            <IconButton name="share"/>
          </CardMenu>
        </Card>

        <Card className="card-1" shadow={5}>
          <CardTitle className="card-1-title">
            Favorite Artists Project
          </CardTitle>

          <CardText>
            Build a tribute website for my favorite artists using Pagpiling.js. Finished in Feb 2020 
          </CardText>

          <CardActions border>
            <Button className="card-1-button"><a href="https://github.com/tandduong/tan-fav-artists" target="_blank">GitHub</a></Button>
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
