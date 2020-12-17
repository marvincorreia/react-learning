const INITIAL_STATE = { counter: 0 };

export default function cart(state = INITIAL_STATE, action) {
  console.log("ACTION ", action);
  console.log("STATE ", state);
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { counter: state.counter + 1 };
    case "DECREMENT_COUNTER":
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}
