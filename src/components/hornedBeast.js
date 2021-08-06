import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClick: 0,
    };
  }

  increaseNumOfClick = () => {
    
    this.setState({
      numOfClick: this.state.numOfClick + 1,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        
        {/* <h2>{this.props.title} Title</h2>

        <img src={this.props.imageUrl} alt="pet img" title="The Pet" />
         <p>{this.props.description} </p>
        */}


        <Card style={{ width: "18rem" }}>
          <Card.Img
            onClick={this.increaseNumOfClick}
            variant="top"
            src={this.props.image_url}
            alt="horned beast img"
            title="HORNED BEAST"
          />
          <Card.Body>
            <Card.Title><h2>{this.props.title}</h2></Card.Title>
            <Card.Text><p>{this.props.description}</p></Card.Text>
            <Card.Text>favorited &#x2665;{this.state.numOfClick}</Card.Text>
            {/* <Button variant="primary">Choose me</Button> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
