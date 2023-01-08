const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// STATE
const initialCounterState = {
  count: 0,
};
//action
const incrementCounter = () => {
  return {
    type: INCREMENT,
    // type: "INCREMENT",
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
    // type: "DECREMENT",
  };
};
const resetCounter = () => {
  return {
    type: RESET,
    // type: "RESET",
  };
};

const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        // ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        // ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        // ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        // ...state,
        count: state.count + action.payload,
      };
    default:
      state;
  }
};
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementByValue(10));
