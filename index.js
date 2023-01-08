const { createStore } = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// STATE
const initialCounterState = {
  count: 0,
};
//action
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      state;
  }
};
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCounter);
