import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("BirdStore")
@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelSubmit(e) {
    e.preventDefault();
    const bird = this.bird.value;
    this.props.BirdStore.addBird(bird);
    this.bird.value = "";
  }
  render() {
    const { BirdStore } = this.props;
    const birdsData = BirdStore.birds.map(bird => <li>{bird}</li>);
    return (
      <div>
        <h2>You have {BirdStore.birdCount} birds in store </h2>
        <form onSubmit={this.handelSubmit}>
          <input
            type="text"
            placeholder="Enter bird"
            ref={input => (this.bird = input)}
          />
          <br />
          <button>Add bird</button>
          <ul>{birdsData}</ul>
        </form>
      </div>
    );
  }
}

export default App;
