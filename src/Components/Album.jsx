import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Button,InputGroup,Form,Modal
} from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  setUserName: username =>
    dispatch({
      type: "USER_LOGGED_IN",
      payload: username
    })
});

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Album: [],
      showModal: false,
      username: null
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

  toggleModal = () => {
    console.log("hihi")
    this.setState({ showModal: !this.state.showModal, username: null });
  };

  render() {
    console.log(this.props.username,"user")
    return (
      <>
        <div>
          {this.props.user && this.props.user.username ? (
            <>
              <div>Welcome, {this.props.user.username}!</div>

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
                              type="button"
                            >
                              Play
                    </Button>
                          </CardBody>
                        </Card>
                      </div>
                    )}
                    <div className="col-md-8 p-5">
                      <div className="row"></div>
                      {this.state.Album.tracks &&
                        this.state.Album.tracks.data.map((A, index) => (
                          <div id="track-List1" class="col-md-9">
                            <div
                              key={index}
                              className=" trackHover justify-content-center"
                              style={{ color: "white" }}
                            >
                              <div>
                                <p>
                                  <b>{A.title}</b>
                                </p>
                                <audio controls>
                                  <source
                                    src={A.preview}
                                    type="audio/mpeg"
                                    autoPlay
                                    controls
                                  />
                                </audio>
                                <small style={{ color: "white", float: "right" }}>
                                  {A.duration}
                                </small>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
              <Button
                color="primary"
                onClick={() => this.setState({ showModal: true })}
              >
                Login
          </Button>
            )}

        </div>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showModal}
          onHide={this.toggleModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create account
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <Form
                aria-label="user"
                onChange={e => this.setState({ username: e.target.value })}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.toggleModal()}>Close</Button>
            <Button
              onClick={() => {
                this.props.setUserName(this.state.username);
                this.toggleModal();
              }}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Album);
