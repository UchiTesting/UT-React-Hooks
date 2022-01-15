import { useState } from "react";

const UseStateDemo = () => {
    const [counter, setCounter] = useState(0);

    const initialState = {
        a: 0,
        b: "One",
        c: 2.0
    };

    const whatIsState = useState(initialState);

    const [objState, setObjState] = whatIsState;

    console.log(whatIsState);

    const handleIncrement = (e) => {
        e.preventDefault();
        if (counter < 10)
            setCounter(c => c + 1);
    }

    const handleDecrement = (e) => {
        e.preventDefault();
        if (counter > 0)
            setCounter(c => c - 1);
    }

    const handleReset = (e) => {
        e.preventDefault();
        setCounter(c => 0);
    }

    const handleObjIncrement = (e) => {
        e.preventDefault();

        setObjState(pState => {

            if ('objCount' in pState && pState.objCount >= 10) return { ...pState };

            return ('objCount' in pState) ? { ...pState, objCount: (pState.objCount + 1) } : { ...pState, objCount: 0 };

        });
    }

    const handleObjDecrement = (e) => {
        e.preventDefault();


        setObjState(pState => {
            if ('objCount' in pState && pState.objCount <= 0) return { ...pState };

            return ('objCount' in pState) ? { ...pState, objCount: (pState.objCount - 1) } : { ...pState, objCount: 0 }
        });

    }

    const handleObjReset = (e) => {
        e.preventDefault();
        setObjState(initialState);

    }

    return (<div>
        <h2>useState Hook</h2>
        <p>Nothing beats a simple counter to demonstrate state management.</p>
        <p>The buttons allow to increment and decrement the counter in the range [0,10]</p>
        <p>In the console you could see an output that shows <code>useState</code> Hook outputs an array of 2 elements. Hence we access those by deconstructing that array as in the line <code>const [counter, setCounter] = useState(0)&#59;</code></p>
        <p>Unlike class component <code>setState</code> method, there is no state fusion. Should we work on a state that is an object, we must make sure to copy that state and then update it.</p>

        <pre><code>{`
const [myState, setMyState] = useState({a:0, b:"one", c true});

...

setMyState(previousState => {return {...previousState, count:count+1}});
        `}</code></pre>
        <p>The snippet above is a general principle. The actual code on this page is actually a bit more complex.</p>
        <p>The <em>Obj</em> version of the counter is based on an object which contains a number property for the counter. Initially this number does not exists though. Hence the output displaying <em>n/a</em>. <br />
            After clicking a first time on any increment or decrement button, it is initialised to <em>0</em>. <br />
            Then the counter is behaving as the previous one i.e. in the [0,10] range.</p>

        <div>
            <p className="output">{counter}</p>
        </div>
        <button onClick={handleIncrement}>&#43;</button>
        <button onClick={handleDecrement}>&minus;</button>
        <button onClick={handleReset}>Reset</button><br />
        <div>
            <p className="output">{(objState.objCount || objState.objCount === 0) ? objState.objCount : "n/a"}</p>
        </div>
        <button onClick={handleObjIncrement}>Obj &#43;</button>
        <button onClick={handleObjDecrement}>Obj &minus;</button>
        <button onClick={handleObjReset}>Obj reset</button>
    </div>)
}

export default UseStateDemo;