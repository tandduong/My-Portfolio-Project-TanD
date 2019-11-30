import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contacts extends Component {
  render(){
    return(
      <div className="contact-textbox">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>
              Tan D Duong
            </h2>
            <img 
              src="https://i.postimg.cc/P5PCw0xC/IMG-8114.jpg"

              alt="ava"
            />
            <p>Keep in touch with me for Coffee Games and Work!</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contacts-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontFamily: 'Barlow'}}><i class="fa fa-mobile" aria-hidden="true"></i><label>4438087475</label></ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontFamily: 'Barlow'}}><i class="fa fa-envelope" aria-hidden="true"></i><label>tanduong1912@gmail.com</label></ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontFamily: 'Barlow'}}><i class="fa fa-coffee" aria-hidden="true"></i><label>Towson, Baltimore, MD</label></ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontFamily: 'Barlow'}}><i class="fa fa-skype" aria-hidden="true"></i><label>Updating Soon</label></ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}


export default Contacts;