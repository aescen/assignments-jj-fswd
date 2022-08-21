import React from 'react';

import { useCount } from './CountContext';
import { INCREMENT, DECREMENT } from './ContextConsts';

const Counter = () => {
  // set dispatch and state count from useCount()
  const { count, dispatch } = useCount();

  return (
    <div>
      {/* change 0 with count from context */}
      Count: {count}
      <div>
        {/* use dispatch for onClick method */}
        <button
          className='count-button'
          onClick={() => {
            dispatch({
              type: INCREMENT,
              payload: null,
            });
          }}
        >
          +
        </button>
        <button
          className='count-button'
          onClick={() => {
            dispatch({
              type: DECREMENT,
              payload: null,
            });
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
