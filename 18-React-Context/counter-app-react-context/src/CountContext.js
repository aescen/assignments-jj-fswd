import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { INCREMENT, DECREMENT } from './ContextConsts';

const CountContext = createContext();

const countReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return (state += 1);
    case DECREMENT:
      return (state -= 1);
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const CountProvider = ({ children }) => {
  // useReducer
  const [count, dispatch] = useReducer(countReducer, 0);

  // Make variable `value` and assign state & dispatch
  return (
    <CountContext.Provider value={{ count, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => {
  // fill the default value of useContext
  const context = useContext(CountContext);

  if (context === 'undefined') {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};

export { CountProvider, useCount };
