import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    };

    return (
        <div style={{border: '2px solid yellow', margin: '30px 0', padding: '20px 0', borderRadius: '30px'}}>
            <h3>Counter: {count}</h3>

            <div style={{display: 'flex', gap: '8px', justifyContent: 'center'}}>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
            </div>
        </div>
    )
}