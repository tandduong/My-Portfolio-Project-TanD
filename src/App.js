import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div style={{height: '625px', position: 'relative'}}>
    <Layout style={AppStyle}>
        <Header className="main-color" transparent title="My Portfolio" style={{color: 'white'}}>
            <Navigation className="title">
                <Link to="/">Main Page</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/about">About</Link>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation className="nav">
                <Link to="/">Main Page</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/about">About</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
    </Layout>
</div>
  );
}

const AppStyle ={
  background: 'center / cover',
  backgroundImage: ' linear-gradient(to right top, rgba(213, 203, 111, 0.801), rgba(40, 89, 180, 0.801)), url(https://i.postimg.cc/RZBcGgHS/DSC-0021.jpg)',
  position: 'relative',
} 

export default App;
