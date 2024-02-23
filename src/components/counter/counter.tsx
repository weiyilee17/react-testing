import { useState } from 'react';
import type { ChangeEvent } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        type="number"
        name="amount"
        value={amount}
        onChange={handleChange}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
}

export default Counter;
