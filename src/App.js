// first we are import the react library
import React from "react";
import "./App.css";
import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";
import data from "./components/assets/data.json";
import SelectedBeast from "./components/SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "tit",
      image_url: "imgu",
      description: "des",
      show: false,
    };
  }

  modalData = (title, image_url, description) => {
    this.setState({
      title: title,
      url: image_url,
      description: description,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleHide = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        {/* We are creating a new instances of the Main class component */}
        <Header />
        <SelectedBeast
          show={this.state.show}
          hidden={this.handleHide}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
        />
        <Main dataList={data} modalData={this.modalData} />
        <Footer />
      </div>
    );
  }
}

export default App;
