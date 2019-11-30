import React, {Component} from 'react';
import {List, ListItem, ListItemContent} from 'react-mdl';

class Profile extends Component{
  render(){
    return(
      <List>
        <ListItem>
          <ListItemContent>
            <i className="fa fa-birthday-cake" aria-hidden="true">
              </i>
            <label>12/19/1999
            </label>
          </ListItemContent>
        </ListItem>

        <ListItem>
          <ListItemContent>
          <i className="fa fa-map-marker" aria-hidden="true"></i><label>Ho Chi Minh City, Vietnam</label>
            </ListItemContent>
        </ListItem>

        <ListItem>
          <ListItemContent>
          <i className="fa fa-plane" aria-hidden="true"></i><label>Towson, MD, US</label>
          </ListItemContent> 
        </ListItem>

        <ListItem>
          <ListItemContent>
          <i class="fa fa-university" aria-hidden="true"></i><label>Towson University</label>
          </ListItemContent>
        </ListItem>

        <ListItem>
          <ListItemContent>
          <i className="fa fa-cutlery" aria-hidden="true"></i><label>Pho, Banh Mi and Curry</label>
          </ListItemContent>
        </ListItem>

        <ListItem>
          <ListItemContent>
          <i className="fa fa-gamepad" aria-hidden="true"></i><label>Board Games, FIFA, PES</label>
          </ListItemContent>
        </ListItem>

        <ListItem>
          <ListItemContent>
          <i className="fa fa-heart" aria-hidden="true"></i><label>Coding, Sketching, Gaming</label>
          </ListItemContent>
        </ListItem>  

        <ListItem>
          <ListItemContent>
          <i className="fa fa-pencil" aria-hidden="true"></i><label>My artworks<a href="https://www.facebook.com/tdd1912/media_set?set=a.2422413417971880&type=3" target="_blank"> here</a> (Facebook)</label>
          </ListItemContent>
        </ListItem> 
      </List> 
    )
  }
}

export default Profile;