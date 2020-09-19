import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./Counter";
import { INCREMENT, DECREMENT, RESET } from "./actions";
import './App.css';

// The store needs a reducer to be created
// Redux reducers have this signature (state, action) => newState
// Meaning: it takes the current state, and an action, and returns
// the newState
// they reduce a set of actions over time into a single state
// The reducer should return the initial state the first time its called

// create initial state
const initialState = {
  count: 0
};

// create reducer
// handle actions in the redux reducer
function reducer(state = initialState, action){
  switch (action.type) {
    case INCREMENT:
       return {
         count: state.count + 1
       };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
}

// create a store
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
        <Counter />
    </Provider>
  )
};

export default App;
