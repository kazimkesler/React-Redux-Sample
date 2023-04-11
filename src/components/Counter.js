import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../slices/counterSlice'
export function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(decrement())}>
                -
            </button>
            <button onClick={() => dispatch(increment())}>
                +
            </button>
            <button onClick={() => dispatch(incrementByAmount(2))}>
                +2
            </button>
        </div>
    )
}
export default Counter;