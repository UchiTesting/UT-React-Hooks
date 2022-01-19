import { useReducer } from "react";

const UseReducerDemo = () => {
    const initialState = { counter: { value: 0 } };

    const increment = (state) => { return { ...state, counter: { value: state.counter.value + 1 } } }
    const decrement = (state) => { return { ...state, counter: { value: state.counter.value - 1 } } }

    const counterReducer = (state, action) => {
        console.log(state, action);
        switch (action.type) {
            case 'increment': return (state.counter.value < 10)
                ? increment(state) : state;
            case 'decrement': return (state.counter.value > 0)
                ? decrement(state) : state;
            case 'reset': return counterInit(initialState);
            default: throw new Error(`Action ${action.type} is not recognized.`);
        }
    }

    const counterInit = (initValue) => { return initValue; }

    const [state, dispatchCounterAction] = useReducer(counterReducer, initialState, counterInit);


    return (
        <div>
            <h2>useReducer Hook</h2>
            <p>This is an alternative to <code>useState</code> that fits more objects with properties.</p>
            <p>It somehow works like Redux reducers. The hook takes such reducer as first parameter. Reducers are functions that receive a state and action as parameters and do different things depending on the action <code>type</code> property. They must also return a new state.</p>
            <p>The second parameter is the initialisation value.</p>
            <p>The third parameter allows to initialize the state lazyly. In other word the initialisation occurs when needed. It takes a function that can hence be used outside of the hook. Upon mounting the component, it uses the second parameter as its argument.This allows for instance to format the state with a complex structure with a simpler argument. Such is our demo. We initialize an object (composite value) from a scalar (atomic) value.</p>
            <p>Similarly to <code>useState</code> hook, we use a counter which is stored in an object as follows:</p>
            <pre><code>{`
{
    counter: {
        value: 0
    }
}            
            `}</code></pre>
            <p>Also it will be limited to the range <em>[0, 10]</em> and provide a reset button. The main difference with our <code>useState</code> demo is the logic is gathered in the reducer (nothing prevent the use of external function). The demo code:</p>
            <pre><code>{`
const initialState = { counter: { value: 0 } };

const increment = (state) => { return { ...state, counter: { value: state.counter.value + 1 } } }
const decrement = (state) => { return { ...state, counter: { value: state.counter.value - 1 } } }

const counterReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'increment': return (state.counter.value < 10)
            ? increment(state) : state;
        case 'decrement': return (state.counter.value > 0)
            ? decrement(state) : state;
        case 'reset': return counterInit(initialState);
        default: throw new Error('Action '+ action.type +' is not recognized.');
    }
}

const counterInit = (initValue) => { return initValue; }

const [state, dispatchCounterAction] = useReducer(counterReducer, initialState, counterInit);
            `}</code></pre>
            <div id="demo">
                <div>
                    <div>
                        <p className="output">{JSON.stringify(state)}</p>
                    </div>
                    <button onClick={() => dispatchCounterAction({ type: 'increment' })}>+</button>
                    <button onClick={() => dispatchCounterAction({ type: 'decrement' })}>-</button>
                    <button onClick={() => dispatchCounterAction({ type: 'reset' })}>C</button>
                    <div style={{ marginTop: "10px" }}>
                        <button onClick={() => dispatchCounterAction({ type: 'crashOnPurpose' })}>Cause an error because of unknown action (reload the page after)</button>
                    </div>
                </div>
            </div>
        </div>);
}

export default UseReducerDemo;