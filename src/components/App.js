import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      items: itemData,
      isDarkMode: false,
    };
  }

  handleDarkModeClick(event) {
    this.setState({
      isDarkMode: !this.state.isDarkMode
    });
  }
  
  render()
  {
    return (
      <div className={"App " + (this.state.isDarkMode ? "dark" : "light")}>
        <header>
          <h2>Shopster</h2>
          <button onClick={this.handleDarkModeClick.bind(this)}>
            {this.state.isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
        <ShoppingList items={this.state.items} />
      </div>
    );
  }
}

export default App;
