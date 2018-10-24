import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
