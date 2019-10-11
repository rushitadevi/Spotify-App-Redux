import React from "react";
import { CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";


class DisplayMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Albums: [],
    };
  }

  componentDidMount = async name => {
    console.log(this.props.name);
    var headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387"
    });
    var response = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + "Bonobo",
      {
        method: "GET",
        headers: headers
      }
    );
    if (response.ok) {
      var jSON = await response.json();
      this.setState({
        Albums: jSON.data
      });
    }
  };

  render() {
    return (
      <>
        <div className="row">
          {this.state.Albums.length > 0 &&
            this.state.Albums.map((data, index) => (
              <div key={index} className="col-md-3">
             
                <CardImg
                  top
                  src={data.album.cover_medium}
                  alt="Card image cap"
                  style={{ cursor: "pointer", height: "150px" }}
                />
                <p>
                  <Link to={"/Album/" + data.album.id} key={data.album.id}>
                    <Card-Text> {data.album.title} </Card-Text>
                  </Link>
                  {/* <a href="artist_page.html?id=${songInfo[i].artist.name}">  
                                          artist: ${songInfo[i].artist.name}
                                          </a> */}
                </p>
             
              </div>
              
            )).slice(0, 12)}
        </div>
        
      </>
    );
  }
}

export default DisplayMovies;
