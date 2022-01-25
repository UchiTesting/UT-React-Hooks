import { useRef } from "react";

const UseRefDemo = () => {

    const myReffedOutput = useRef(null);
    const myTimeInput = useRef(null);

    const handleClick = () => {
        const st = myTimeInput.current.value;
        myReffedOutput.current.textContent = `${new Date()} => ${st}`

    }

    const toggleTimeInput = (e) => {
        e.preventDefault();
        const timer = myTimeInput.current;
        const enabled = timer.readonly;
        const { value } = timer;

        myTimeInput.current.readonly = !enabled;
        myReffedOutput.current.textContent = `Time input => ${(enabled) ? "Enabled" : "Disabled"}.\nValue => ${value}`;
    }

    return (<div>
        <h2>useRef Hook</h2>
        <div id="demo">
            <input ref={myTimeInput} className="big-clock" list="remarkable-times" type="time" min="09:00" max="17:00" step="900" defaultValue="12:00" />
            <div>
                <p ref={myReffedOutput} className="output"></p>
            </div>
            <button onClick={handleClick}>Click me</button>
            <button onClick={toggleTimeInput}>Toggle Input</button>

            <datalist id="remarkable-times">
                <option value="09:00" />
                <option value="10:30" />
                <option value="13:45" />
                <option value="15:15" />
                <option value="16:30" />
            </datalist>
        </div>
        <p>Refs are used to keep a data  across page life-cycle. It can be any data but more likely DOM elements.</p>
        <p>It works by instanciating an identifier with the <code>useRef</code> hook to which we can provide an initial value. In the case of referencing DOM elements, that particular element must be given a <code>ref</code> attribute to which we provide the identifier defined earlier. In such case the value will be updated when the component is mounted.</p>

        <pre><code>{`
const myTimeInput = useRef(null);
// ... any code here ...
<input ref={myTimeInput} list="remarkable-times" type="time" min="09:00" max="17:00" 
    step="900" defaultValue="12:00" />
            `}</code></pre>

        <p>References should be avoided as much as possible and in many situations can be dealt with state instead. It is the option available when you have no other option than retrieve a DOM element similarly to <code>document.getElementById</code> for instance.</p>
        <p>The current demo shows a timer input that is referenced. Its value can be edited as usual. Clicking on the <kbd>Click Me</kbd> button, a label will be written the current time and timer value. Clicking on the <kbd>Toggle Input</kbd> button, the content of the label is replaced by its supposed state. It is intended to update the <code>readonly</code> property of the input which should have resulted in the value of the timer being editable or not. As the label will display this property is indeed updated accordingly. Yet, there is no effect at all. This is because the <code>useRef</code> hook do not trigger any rerender should its value be updated.</p>
    </div>);
}

export default UseRefDemo;