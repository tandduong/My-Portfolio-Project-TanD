import React, {Component} from 'react';
import{Grid, Cell} from 'react-mdl';
import Profile from './profile';



class About extends Component {
  render(){
    return(
      <div >
        <Grid className="about-grid">
          <Cell className="about-left" col={4}>
            <img className="img-1" src="https://i.postimg.cc/P5PCw0xC/IMG-8114.jpg" alt="avatar" />

            <img className="img-2" src="https://i.postimg.cc/s2V3zddv/signature5de21374ccccb.png" alt="signaature" />
            <hr/>
            <div className="about-profile">
              <Profile/>
              <div className="vl"></div>  
            </div>
          </Cell>
          <Cell col={8}>
            <div className="about-intro">
              <h2>Hello!</h2>
              <br/>
              <h4>Here is a little about me.</h4>
              <p>I am the international student from Vietnam and have the deep interesrting in programming. I love building and designing websites. My other hobbies in free time are skething and writing songs (Most of my songs sound dumb though). I want to master my Front-End skill and I have a dream to become a Full Stack Developer in the future. I am also love reading manga and cooking. I see myself as the introvert and quiet person, but friendly and open-minded.</p>
              <p>My favorite subjects when I was in highschool are Math and History, and I chose Computer Science to study because of my sister, and also because of my love in interacting with softwares and coding. I have taught myself HTML and CSS when I was a freshman before I enrolled to the web-based class, where I learnt more about JavaScript and ReactJs. This is my first complete project I built by using ReactJs and React-MDL for the nice template.</p>
              <p>I traveled to the US in 2017 to start my college career, and right now I am a Junior. I always tell myself to work hard and give 100% effort in all exams and projects to keep the good grade. I am planning to have at least one internship before I graduate as well as to apply for the gradute program to continue my study career. I know things will not go easy on me but I will keep trying. Maybe one day I will have my own the office. See you there!</p>
              <p>Thanks for reading my story,</p>
              <p>Thanksgiving 2019,</p>
              <p>Tan x</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}



export default About;