import type { CounterProps } from "../types";

const Counter: React.FC<CounterProps> = ({ count, setCount, maxCount }) => {

    const handleIncrement = () => {
        if (maxCount == undefined || count < maxCount) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="counter">
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;
