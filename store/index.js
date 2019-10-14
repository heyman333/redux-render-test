import { combineReducers } from 'redux';

export const INCREMENT_NUMBERA = 'INCREMENT_NUMBERA';
export const DECREMENT_NUMBERA = 'DECREMENT_NUMBERA';
export const INCREMENT_NUMBERAA = 'INCREMENT_NUMBERAA';
export const DECREMENT_NUMBERAA = 'DECREMENT_NUMBERAA';

export const INCREMENT_NUMBERB = 'INCREMENT_NUMBERB';
export const DECREMENT_NUMBERB = 'DECREMENT_NUMBERB';
// const INCREMENT_NUMBERBB = 'INCREMENT_NUMBERBB';
// const DECREMENT_NUMBERBB = 'DECREMENT_NUMBERBB';

const AinitialState = {
  numberA: 1,
  numberAA: 10,
};

const BinitialState = {
  numberB: 1,
  numberBB: 10,
};

const ANumberstateReducer = (state = AinitialState, action) => {
  switch (action.type) {
    case INCREMENT_NUMBERA:
      return { ...state, numberA: state.numberA + 1 };
    case DECREMENT_NUMBERA:
      return { ...state, numberA: state.numberA - 1 };
    case INCREMENT_NUMBERAA:
      return { ...state, numberAA: state.numberAA + 10 };
    case DECREMENT_NUMBERAA:
      return { ...state, numberAA: state.numberAA - 10 };
    default:
      return state;
  }
};

const BNumberStateRducer = (state = BinitialState, action) => {
  switch (action.type) {
    case INCREMENT_NUMBERB:
      return { ...state, numberB: state.numberB + 1 };
    case DECREMENT_NUMBERB:
      return { ...state, numberB: state.numberB - 1 };
    default:
      return state;
  }
};

const root = combineReducers({
  ANumberstateReducer,
  BNumberStateRducer,
});

export default root;
