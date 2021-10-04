import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
    state = {
        counters : [
            {id: 1, value: 5},
            {id: 2, value: 4},
            {id: 3, value: 3},
            {id: 4, value: 2},
            {id: 5, value: 1}
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters});
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters : counters});
    };



    render() { 
        return (
            <div>
                <button
                className="btn btn-primary btn-sm m-2"
                onClick={this.handleReset}>
                Reset
                </button>
                {this.state.counters.map(counter => 
                <Counter 
                key={counter.id} 
                onDelete={this.handleDelete} 
                counter={counter}
                />)}
            </div>
        );
    }
}
 
export default Counters;
