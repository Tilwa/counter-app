import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: this.props.counter.value,
        tags: ["tag1", "tag2", "tag3"]
    };

    // styles = {
    //     fontSize: 20,
    //     fontWeight: "bold"
    // };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
 
    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count + 1});
    }
    render() { 
        console.log("props", this.props);
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={() => this.handleIncrement(this.state.tags[2])}
                className="btn btn-secondary btn-sm"
                >Increment</button>
                
                <button 
                className="btn btn-danger btn-sm m-2"
                onClick={() => this.props.onDelete(this.props.counter.id)}
                >Delete</button>
                {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
            </div>
        );
    }





    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }


    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;

    }
}
 
export default Counter; 