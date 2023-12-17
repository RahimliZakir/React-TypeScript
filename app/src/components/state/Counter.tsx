import React, { useReducer } from "react";

enum CounterActionTypes {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
  CHANGE_NAME = "CHANGE_NAME",
}

type CounterState = {
  name: string;
  age: number;
};

type CounterAction = {
  type: string;
  payload?: number | string;
};

const initialState = {
  name: "",
  age: 0,
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case CounterActionTypes.INCREASE:
      return { ...state, age: state.age + 1 };
    case CounterActionTypes.DECREASE:
      return { ...state, age: state.age - 1 };
    case CounterActionTypes.CHANGE_NAME:
      return { ...state, name: action?.payload as string };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <form className="d-flex flex-column align-items-center">
        <div className="mb-2">
          <input
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: CounterActionTypes.CHANGE_NAME,
                payload: e.target.value,
              })
            }
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <button
            onClick={() => dispatch({ type: CounterActionTypes.INCREASE })}
            className="btn btn-success"
            type="button"
          >
            Increase
          </button>
          <button
            onClick={() => dispatch({ type: CounterActionTypes.DECREASE })}
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
