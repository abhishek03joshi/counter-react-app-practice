import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    console.log("Counters - Rendered");
    return (
      <div>
        <button 
        onClick={onReset}
        className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        { counters.map( counter => 
        <Counter 
          key={counter.id} 
          onIncrement={this.props.onIncrement} 
          onDelete={this.props.onDelete} 
          counter={counter} 
        >
        </Counter>  
        )}
      </div>
    );
  }
}

export default Counters;