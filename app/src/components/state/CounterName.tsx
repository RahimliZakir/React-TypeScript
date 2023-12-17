import React, { useReducer } from "react";

enum CounterNameActionTypes {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
  CHANGE_NAME = "CHANGE_NAME",
}

type CounterNameState = {
  name: string;
  age: number;
};

type CounterAction = {
  type: CounterNameActionTypes.INCREASE | CounterNameActionTypes.DECREASE;
};

type NameAction = {
  type: CounterNameActionTypes.CHANGE_NAME;
  payload: string;
};

//* useReducer Strict Action Types
type CounterNameAction = CounterAction | NameAction;

const initialState = {
  name: "",
  age: 0,
};

const reducer = (state: CounterNameState, action: CounterNameAction) => {
  switch (action.type) {
    case CounterNameActionTypes.INCREASE:
      return { ...state, age: state.age + 1 };
    case CounterNameActionTypes.DECREASE:
      return { ...state, age: state.age - 1 };
    case CounterNameActionTypes.CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <form className="d-flex flex-column align-items-center">
        <div className="mb-2">
          <input
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: CounterNameActionTypes.CHANGE_NAME,
                payload: e.target.value,
              })
            }
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <button
            onClick={() => dispatch({ type: CounterNameActionTypes.INCREASE })}
            className="btn btn-success"
            type="button"
          >
            Increase
          </button>
          <button
            onClick={() => dispatch({ type: CounterNameActionTypes.DECREASE })}
            className="btn btn-info"
            type="button"
          >
            Decrease
          </button>
        </div>

        <p>
          Name is {state.name} and age is {state.age}.
        </p>
      </form>
    </div>
  );
};

export default Counter;
