import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("BirdStore")
@observer
class App extends Component {
  render() {
    const { BirdStore } = this.props;
    return (
      <div>
        <h2>You have {BirdStore.birdCount} birds in store </h2>
      </div>
    );
  }
}

export default App;
