import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(count - count)}> Reset</button>
        </section>
      </div>
    </div>
  )
}

export default Counter
