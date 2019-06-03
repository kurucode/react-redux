import React, {Component} from 'react'

class Counter extends Component {
    render() {
        const {counter_num, increment, decrement, reset } = this.props;
        return (
            <div>
                <div>{counter_num}</div>
                <div>
                    <button onClick={increment}>Increment 1</button>
                </div>
                <div>
                    <button onClick={decrement}>Decrement 1</button>
                </div>
                <button onClick={reset}>Reset</button>
            </div>
        );
    }
}

export default Counter;
