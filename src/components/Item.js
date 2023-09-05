import React, { useState } from "react";

class Item extends React.Component {
  constructor(props)
  {
    super(props);
    this.props = props;
    this.state = {
      isInCart: false,
    };
  }

  handleAddToCartClick(event) {
    this.setState({
      isInCart: !this.state.isInCart
    });
  }

  render()
  {
    return (
      <li className={this.state.isInCart ? "in-cart" : ""}>
        <span>{this.props.name}</span>
        <span className="category">{this.props.category}</span>
        <button
          className={this.state.isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick.bind(this)}
        >
          {this.state.isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
