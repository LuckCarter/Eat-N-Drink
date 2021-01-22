import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/index';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
      <div>
        <Navbar></Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Eat N' Drink</h1>
          <Link to='allMenu'>
            <button className="App-link">
            Menu
            </button>
          </Link>

        </header>
        <Footer></Footer>
      </div>
        
    );
};

export default Home;

