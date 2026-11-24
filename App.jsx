import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count * 2)}>×2</button>
      <button onClick={() => setCount(count / 2)}>÷2</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr style={{ width: "250px", margin: "20px auto" }} />

      <p>Status: {count > 0 ? "Positive" : count < 0 ? "Negative" : "Zero"}</p>
      <p>Type: {count % 2 === 0 ? "Even" : Number.isInteger(count) ? "Odd" : "Decimal"}</p>
      <p>Square: {count * count}</p>
      {count >= 10 && <p style={{ color: "green" }}>Count reached 10 or more!</p>}
      {count < 0 && <p style={{ color: "red" }}>Count is in negative!</p>}
    </div>
  );
}