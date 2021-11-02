import React, { Component } from 'react';


class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevState", prevState);
    console.log("prevProps", prevProps);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        {/* <h4>{this.props.counter.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className = "btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={ () => this.props.onDelete(this.props.counter.id)} 
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2 ";
    classes += this.props.counter.value == 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    return (this.props.counter.value === 0) ? "Zero": this.props.counter.value;
  }

}
 
export default Counter;