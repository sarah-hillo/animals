// first we are import the react library
import React from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import data from './components/assets/data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      image_url: null,
      description: null,
      visible: false,
    };
  }

  modalData = (title, image_url, description) => {
    this.setState({
      title: title,
      image_url: image_url,
      description: description,
    });
  };

  // handleShow = () => {
  //   this.setState({
  //     show: true,
  //   });
  // };

  // handleHide = () => {
  //   this.setState({
  //     show: false,
  //   });
  // };
  updateVisible = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <div>
        {/* We are creating a new instances of the Main class component */}
        <Header />
        <SelectedBeast
          visible={this.state.visible}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          modalData={this.modalData}
          updateVisible={this.updateVisible}
        />
        <Main
          data={data}
          modalData={this.modalData}
          updateVisible={this.updateVisible}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
