'use client';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../features/countSlice';

function CounterPage() {
  const count = useSelector((state:any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Counter Page</h1>
      <div className="flex flex-col items-center gap-4">
        <div className='flex flex-col items-center'>
              <button 
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            +
          </button>
        <div className="text-8xl font-bold my-5">{count}</div>
          <button 
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => dispatch(reset())}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
          <button 
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +5
          </button>
        </div>
      </div>
    </section>
  )
}

export default CounterPage