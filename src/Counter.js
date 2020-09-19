import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from "./actions";

class Counter extends React.Component{

    increment = () => {
        this.props.increment();
    };

    decrement = () => {
        this.props.decrement();
    };

    reset = () => {
        this.props.reset();
    };

    render(){
        return(
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span className="count">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.reset}>R</button>
                </div>
            </div>
        );
    }
}

// using mapDispatchToProps to save stress of writing this.props.dispatch
const mapDispatchToProps = {
    increment,
    decrement, 
    reset
}

// the object returned from here gets fed into the component as props
function mapStateToProps(state){
    return {
        count: state.count
    };
}

// connect hooks into Redux, pull out the entire state
// and pass it through the mapStateToProps function that u provide
// this needs to be a custom function because only you know the shape
//  of the state you stored in redux 

export default connect(mapStateToProps, mapDispatchToProps)(Counter);