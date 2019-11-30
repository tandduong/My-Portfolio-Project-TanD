import React, {Component} from 'react';
import {Grid, Cell, Tabs, Tab, Card, CardText, CardActionProps, CardActions, CardTitle, CardMenu, Button,IconButton} from 'react-mdl';
import IndividualProj from './individualProj';
import GroupProj from './groupProj';

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div >
          <IndividualProj/>
        </div>
      )
    }
    else{
      return(
        <GroupProj/>
      )
    }
  }

  render(){
    return(
      <div className="proj-header">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab><label>Individual Projects</label></Tab>
          <Tab><label>Group Projects</label></Tab>
        </Tabs>

        
        <Grid>
          <Cell col ={12}>

          </Cell>
        </Grid>
        <div className="content">{this.toggleCategories()}</div>
        
      </div>
    )
  }
}

export default Projects;