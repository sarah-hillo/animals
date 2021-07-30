import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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

  dataToModal = () => {
    this.props.updateVisible();
    this.props.modalData(
      this.props.title,
      this.props.image_url,
      this.props.description,
      true
    );
  };

  render() {
    console.log(this.props);
    return (
      <div><section>{/* <h1>{this.props.title} Title</h1>
        <p>{this.props.description} </p>
        <img src={this.props.img} alt="" /> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img
          onClick={() => {
            this.dataToModal();
          }}
          onClick={this.increaseNumOfClick}
          variant='top'
          src={this.props.image_url}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>favorited &#x2665;{this.state.numOfClick}</Card.Text>
          <Button variant='primary'>Choose me :) </Button>
        </Card.Body>
      </Card>
      </section>
      </div>
    );
  }
}

export default HornedBeasts;
