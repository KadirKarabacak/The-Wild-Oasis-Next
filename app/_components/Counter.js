"use client";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>
                Increase
            </button>
            <div>{count}</div>
            <button onClick={() => setCount(count => count - 1)}>
                Decrease
            </button>
        </div>
    );
}

export default Counter;
