import { useCallback, useMemo } from "react";

const UseCallbackDemo = () => {

    const callbackUsed = useCallback(
        (param) => {
            return `UseCallBack: ${param}`;
        },
        []
    );

    const memoUsed = useMemo((param) => {
        return `UseMemo: ${param}`;
    }, []);

    return (<div>
        <h2>useCallback Hook</h2>
        <div id="demo">
            <p className="output">{callbackUsed(100)}</p>
            <p className="output">{memoUsed}</p>
        </div>
        <p>To understand <code>useCallback</code>, you must understand <code>useMemo</code> first. They broadly do the same thing, the difference is <code>useMemo</code> returns the value of the callback function passed as 1<sup>st</sup> parameter while <code>useCallback</code> returns that callback function itself. This open new possibilities such as being able to pass arguments. You can write the callback function with a parameter for <code>useCallback</code> while it is pointless and won't even work with <code>useMemo</code></p>

        <pre><code>{`
useEffect(() => {
    callbackUsed(100);
    memoUsed(100);
}, []);        
        `}</code></pre>

        <p>The result of the above is <em>Uncaught TypeError: memoUsed is not a function</em> and the page display fails.</p>
        <p>The demo above does not use <code>memoUsed</code> like a function. Hence it has no parameter given. It would have been ignored anyway.</p>
    </div>);
}

export default UseCallbackDemo;