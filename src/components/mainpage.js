import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class MainPage extends Component {
  render(){
    return(
      <div>
        <Grid className="mainpage-grid">
          <Cell col={12}></Cell>

          <div className="intro-text">
            <h2>Towson University Student Junior</h2>
            <h3>Tan D. Duong</h3>
            <h4>Computer Science Major</h4>
            <hr/>
            <p>HTML/CSS | JavaScript | ReactJs | NodeJs | MongoDB | Java</p>

            <div className="social-media">
              <a href="https://www.linkedin.com/in/tan-duong-84a711174/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin" aria-hidden="true">
                </i>
              </a>

              <a href="https://github.com/tandduong" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github" aria-hidden="true">
                </i>
              </a>

              <a href="https://www.facebook.com/tdd1912" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-facebook-official" aria-hidden="true">
                </i>
              </a>

              <a href="https://towson.joinhandshake.com/users/7089484" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-handshake-o" aria-hidden="true">
                </i>
              </a>

              
              <a href="https://www.instagram.com/tandduong/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true">
                </i>
              </a>

              <a href="https://www.freecodecamp.org/fcc3640a723-4416-4113-b7b4-1b859acb14cd" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-free-code-camp" aria-hidden="true">
                </i>
              </a>

              <a href="https://twitter.com/TanDDuong1" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true">
                </i>
              </a>
            </div>
          </div>
        </Grid>
      </div>
      
    )
  }
}

export default MainPage;