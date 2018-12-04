import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { configure, observable, action, autorun, computed } from "mobx";

configure({
  enforceActions: "observed"
});

class ShoppingCart {
  @observable
  items = [];

  //   @computed
  //   get totalPrice() {
  //     return this.items.reduce((acc, currentItem) => acc + currentItem.price, 0);
  //   }

  @action
  add(item) {
    console.log("in add");
    this.items.push(item);
    //  this.totalPrice += item.price;
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.add({ id: 1, name: "computer", price: 3000.0 });

shoppingCart.add({ id: 2, name: "mouse", price: 100.0 });
autorun(() => {
  console.log(shoppingCart.items.length);
  console.log(shoppingCart.totalPrice);
});

ReactDOM.render(<App />, document.getElementById("root"));
