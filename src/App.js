
// first we are import the react library
import React from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {

  render() {
    return (
      <div>
        {/* We are creating a new instances of the Main class component */}
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;