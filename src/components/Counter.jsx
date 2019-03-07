import React from 'react';
import { connect } from "react-redux"; 

import * as actions from "../store/actions/index";

const Counter = (props) => {
    return (
        <div>
            <h1>Counter App</h1>
            <p>{props.count}</p>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(actions.increment()),
        decrement: () => dispatch(actions.decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);