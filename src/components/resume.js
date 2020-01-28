import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './exp';
import Courses from './courses';
import Skills from './skills';

class Resume extends Component {
  render(){
    return(
      <div className="resume-textbox">
        <Grid>
          <Cell className="resume-left" col={4}>
            <div>
              <img
                src="https://i.postimg.cc/P5PCw0xC/IMG-8114.jpg"
                alt="resume-avatar"
              />
            </div>
            <h2>Tan D Duong</h2>
            <h4>Student - Towson University</h4>
            <hr/>
            <p className="obj">A Towson University junior studying Computer Science interests in Front-End Development. Seeking an Internship to grow my knowledge and experience. </p>
            <hr className="obj"/>
            <h5>Address</h5>
            <p><a href="https://www.google.com/maps/place/4+McArthur+Ct,+Cockeysville,+MD+21030/@39.4711457,-76.6123185,17z/data=!3m1!4b1!4m5!3m4!1s0x89c80db884957b0b:0x50994aec8e2d0b91!8m2!3d39.4711416!4d-76.6101298" target="_blank" rel="noopenner noreferrer">4 McArthur Ct, Cockeysville, MD, 21030, Apt. C</a></p>
            <hr/>
            <h5>Phone</h5>
            <p>4438087475</p>
            <hr/>
            <h5>Email</h5>
            <p>tanduong1912@gmail.com</p>
            <hr/>
            <h5>Websites</h5>
            <p>
              <div className="social-media">
                <a href="https://www.linkedin.com/in/tan-duong-84a711174/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true">
                  </i>
                </a>
              
                <a href="https://github.com/tandduong" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true">
                  </i>
                </a>

                <a href="https://towson.joinhandshake.com/users/7089484" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-handshake-o" aria-hidden="true">
                </i>
              </a>
              </div>  
            </p>
            <hr/>
            <h5>Other Skills</h5>
            <p>Java, GitHub/Gitlab, VS Code, Excel, Word, Minitab, Ubuntu, Heroku, Firebase</p>
            <hr/>
            <h5>Clubs Member</h5>
            <p>Vietnamese Student Association - VSA(11/2019)</p>
            <p>Software Engineering Club (08/2017)</p>
            <hr/>
            <h5>Cumulative GPA</h5>
            <p>3.442</p>
            <p><strong>Dean's List: Fall 2017, Spring 2018</strong></p>
          </Cell>
          <Cell className="resume-right" col={8}>
            <h2>Education</h2>
            <Education 
              startYear={2017}
              endYear={2021}
              schoolName="Towson University"
              schoolDescription="Bachelor of Science in Computer Science - no Minor Track"
            />
            <hr/>
            <div className="courses">
            <h2>Related Courseworks</h2>
            <Courses
              startDate="August 2019"
              endDate="December 2019"
              courseDescription="Web-based Program"
            />
            <Courses
              startDate="August 2019"
              endDate="December 2019"
              courseDescription="Operating System"
            />
            <Courses
              startDate="Jan 2019"
              endDate="May 2019"
              courseDescription="Data Structures and Algorithms Analysis "
            />
            <Courses
              startDate="August 2018"
              endDate="December 2018"
              courseDescription="Principles of Computer Organization "
            />
            <Courses
              startDate="Jan 2018"
              endDate="December 2018"
              courseDescription="Introduction to Computer Science (I, II)"
            />
            <Courses
              startDate="August 2017"
              endDate="December 2017"
              courseDescription="Discrete Mathematics "
            />
            <Courses
              startDate="August 2017"
              endDate="December 2018"
              courseDescription="Calculus (I, II, III)"
            />
            <hr/>
            </div>
            <h2>Experience</h2>
            <Experience
              startDate = "1/11/2020"
              jobName = "Capital Area Food Bank Volunteer"
              jobDescription ="Volunteered as the helper for the Capital Food Bank; Helped setting vegetables and food and distributed them for needy households
            "
            />
            <Experience
              startDate = "1/10/2020"
              jobName = "Vietnamese Embassy Volunteer"
              jobDescription ="Volunteered for the Tet Night Event in Vietnamese Embassy; Helped guaranteeing the atmosphere of the event.
            "
            />
            <Experience
              startDate = "22/11/2019"
              jobName = "ISA Café Volunteer"
              jobDescription ="Volunteered for the VSA club, helped setting up, serving food, and cleaned up"
            />
            
            <Experience
              startDate = "05/10/2019"
              jobName = "Eden Mid-Fall Festival Volunteer"
              jobDescription = "Volunteered for the VSA club, set up the games and events in the festival, played with children with Vietnamese traditional games in mid-fall Festival, gave the tourists details how to walkthrough and enjoy the fesival"
            />
            <hr/>
            <h2>Skills</h2>
            <Skills
              skill="HTML5"
              progress={100}
            />

            <Skills
              skill="CSS3/SASS"
              progress={85}
            />

            <Skills
              skill="ReactJs"
              progress={75}
            />

            <Skills
              skill="JavaScript"
              progress={73}
            />

            <Skills
              skill="NodeJs"
              progress={70}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;