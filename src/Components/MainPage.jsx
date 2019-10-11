import React from "react";
import { Container } from "reactstrap";
import DisplayMovies from "./DisplayMovies"
import Album from "./Album"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//SSimport logo from './logo/';
//import Shuffel from "../playerButtons/Next.png"

class MainPage extends React.Component {
  render() {
    return (
        <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 fixed-left " style={{background:"black"}} >
              <div className="mt-4">
                  <img  src={'logo/Spotify_Logo.png'}
                  alt="s"
                  width="131px"
                  height="40px"/>
              </div>
            <div
              className="nav-link flex-column  mt-4  "
              id="v-pills-tab"
              aria-orientation="vertical" >
              <a className="nav-item nav-link" href="#">Home</a>
              <a className="nav-item nav-link" href="#">Search</a>
              <a className="nav-item nav-link" href="#">Your Library</a>
              <a className="nav-item nav-link" href="#">Your Albums</a>
            </div>
            
            <div className="nav-btn ">
              <button className="btn signup-Btn" type="button" style={{marginTop : "100px",marginBottom:"20px"}} >
                Sign Up
              </button>
              <button className="btn login-Btn" type="button" style={{marginBottom : "20px"}} >
                Login
              </button>
              <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
            </div>
            
          </div>
          <div className="container" >
          <div className="row centering" id="mainShow">
            <div className="col-10 mainPage">
                <div className="row">
                <div className="mainLinks">
                <a href="#">TRENDING</a>
                <a href="#"> PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
              </div>
           
                </div>
                <div>
                 
                <Route  path="/" exact  component={DisplayMovies}/>
                <Route  path="/Album/:id" exact  component={Album}/>
                </div>
                
               
              
                
             
            </div>
          </div>
                  </div>
        </div>
      </div>
      <div className="container-fluid  " style={{height:"100px",background:"pink"}} >
         
          <div className="row justify-content-center  py-3">
          <div class="row">
                <div class="col-12 playerControls text-center">
                    <a href="#">
                        <img src={'./PlayerButtons/Next.png'} alt="shuffle"/>
                    </a>
                    <a href="#">
                        <img src={'../PlayerButtons/previous.png'} alt="shuffle"/>
                    </a>
                    <a href="#">
                        <img src="PlayerButtons/Play.png" alt="shuffle"/>
                    </a>
                    <a href="#">
                        <img src="PlayerButtons/Next.png" alt="shuffle"/>
                    </a>
                    <a href="#">
                        <img src="PlayerButtons/Repeat.png" alt="shuffle"/>
                    </a>
                </div>
         
          </div>
          </div>
      </div>
      </>
    );
  }
}

export default MainPage;
