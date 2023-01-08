const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const ADD_USER = "ADD_USER";

// STATE
const initialCounterState = {
  count: 0,
};
const addUserState = {
  count: 1,
  users: ["rimon"],
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

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
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
      return state;
  }
};

// create reducer for user
const userReducer = (state = addUserState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        // ...state,
        users: [...state.users, action.payload],
        count: state.count + 1,
        // count: state.count + action.payload,
      };
    default:
      state;
  }
};

const rootReducer = (state = {}, action) => {
  return {
    counter: counterReducer(state.counter, action),
    user: userReducer(state.user, action),
  };
};
const store = createStore(rootReducer);
// const store = createStore(counterReducer);
// const store1 = createStore(userReducer);
store.subscribe(() => {
  console.log(store.getState());
});
// store1.subscribe(() => {
//   console.log(store1.getState());
// });
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementByValue(10));
store.dispatch(addUser("darling"));
store.dispatch(addUser("darling"));
// store1.dispatch(addUser("darling"));
// store1.dispatch(addUser("darling"));
