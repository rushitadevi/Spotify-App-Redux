import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  Button
} from "reactstrap";


class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Album: []
    };
  }

  componentDidMount = async () => {
    var headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387"
    });

    var response = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/album/" +
        this.props.match.params.id,
      {
        method: "GET",
        headers: headers
      }
    );
    var JSON = await response.json();
    this.setState({
      Album: JSON
    });
    console.log("Album", this.state.Album.tracks);
  };

  // componentDidUpdate = async () => {
  //   var headers = new Headers({
  //     "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  //     "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387"
  //   });

  //   var response = await fetch(
  //     "https://deezerdevs-deezer.p.rapidapi.com/album/" +
  //       this.props.match.params.id,
  //     {
  //       method: "GET",
  //       headers: headers
  //     }
  //   );
  //   var JSON = await response.json();
  //   this.setState({
  //     Album: JSON
  //   });
  //   console.log("Album",this.state.Album);
  // };

  render() {
    
    return (
      <>
        <div id="AlbumImg" class="row centering">
          <div class="container mb-3">
            <div class="row no-gutters " id="myContainer">
              {this.state.Album && (
                <div class="col-md-4 p-5" id="img-Container">
                  <Card>
                    <CardImg
                      top
                      className="card-img "
                      src={this.state.Album.cover}
                    />
                    <CardBody>
                      <CardTitle
                        style={{
                          color: "white",
                          fontweight: "bold",
                          fontsize: "x-large"
                        }}
                      >
                        {this.state.Album.title}
                      </CardTitle>
                      <CardSubtitle>{this.state.Album.title}</CardSubtitle>
                      <Button
                        className="btn btn-success text-center"
                        type="button">
                        Play
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              )}
              <div  className="col-md-8 p-5"   >
                <div className="row"></div>
              {this.state.Album.tracks && 
                this.state.Album.tracks.data.map((A,index)=>
                    <div id="track-List1" class="col-md-9">
                      <div key={index}
                        className=" trackHover justify-content-center"
                        style={{ color: "white" }}>
                          <div>
                            <p><b>{A.title}</b></p>
                          <audio controls>
                           <source src={A.preview} type="audio/mpeg" autoPlay controls/>
                           </audio>
                           <small  style={{color:"white", float:"right"}}>{A.duration}</small>
                          </div>
                      </div>
                    </div>
                )
              }
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Album;
