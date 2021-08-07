import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-awesome-modal';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

class SelectedBeast extends React.Component {
  // exitModal = () => {
  //   this.props.hidden(false);
  // };

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  render() {
    return (
      <div>
        <Modal
          visible={this.props.visible}
          width="660"
          height="560"
          effect="fadeInUp"
          onClickAway={this.props.updateVisible}>

          <Card style={{ width: '18rem' }}>
            <Card.Img src={this.props.image_url} alt={this.props.alt} onclick={this.props.updateVisible} title={this.props.title} variant="top"
            />
            <Card.Body>
              <Card.Title><h2>{this.props.title}</h2></Card.Title>
              <Card.Text><p>{this.props.description}</p></Card.Text>
              {/* <Card.Text>favorited &#x2665;{this.state.numOfClick}</Card.Text> */}
              <Button variant='secondary' onClick={this.props.updateVisible}>
              Close
              </Button>
            </Card.Body>
          </Card>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
