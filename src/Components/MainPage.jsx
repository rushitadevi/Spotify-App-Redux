import React from "react";
import DisplayMovies from "./DisplayMovies"
import Album from "./Album"
import SpotifyLogo from "../logo/Spotify_Logo.png";
import NextButton from "../PlayerButtons/Next.png"
import prevoiusButton from "../PlayerButtons/Previous.png"
import playButton from "../PlayerButtons/Play.png"
import ShuffleButton from "../PlayerButtons/Shuffle.png"
import RepeatButton from "../PlayerButtons/Repeat.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MainPage extends React.Component {
  render() {
    return (
        <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 fixed-left " style={{background:"black"}} >
              <div className="mt-4">
                  <img  src={SpotifyLogo}
                  alt="s"
                  width="131px"
                  height="40px"/>
              </div>
            <div
              className="nav-link flex-column  mt-4  "
              id="v-pills-tab"
              aria-orientation="vertical" >
             <Link to="/"> <a className="nav-item nav-link" href="#">Home</a></Link>
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
            <div className="col-10 mainPage mt-4">
                <div className="row">
                <div >
                <a className="mainLinks" href="#">TRENDING   </a>
                <a className="mainLinks" href="#"> PODCAST  </a>
                <a className="mainLinks" href="#">MOODS AND GENRES  </a>
                <a  className="mainLinks" href="#">NEW RELEASES  </a>
                <a className="mainLinks" href="#">DISCOVER  </a>
              </div>
                </div>
                <div className="mt-5">
                <Route  path="/" exact  component={DisplayMovies}/>
                <Route  path="/Album/:id" exact  component={Album}/>
                </div>
            </div>
          </div>
                  </div>
        </div>
      </div>
      <div className="container-fluid  " style={{height:"100px",background:"black"}} >
         
          <div className="row justify-content-center  py-3">
          <div class="row">
                <div class="col-12 playerControls text-center">
                    <a href="#">
                        <img src={NextButton} alt="shuffle" style={{width:"20px"}} />
                    </a>
                    <a href="#">
                        <img src={prevoiusButton} alt="shuffle" style={{width:"20px"}}/>
                    </a>
                    <a href="#">
                        <img src={playButton} alt="shuffle" style={{width:"20px"}}/>
                    </a>
                    <a href="#">
                        <img src={NextButton} alt="shuffle" style={{width:"20px"}}/>
                    </a>
                    <a href="#">
                        <img src={RepeatButton} alt="shuffle" style={{width:"20px"}}/>
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
