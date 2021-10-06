import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import Counter from "./components/counter";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 4 },
      { id: 3, value: 3 },
      { id: 4, value: 2 },
      { id: 5, value: 1 },
    ],
  };
  constructor() {
    super();
  }

  componentDidMount() {
    //Ajax Call
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <Navbar
          counters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counter
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
