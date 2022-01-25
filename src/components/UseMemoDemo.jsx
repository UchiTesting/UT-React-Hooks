import { useMemo, useState, useEffect } from "react";

const UseMemoDemo = () => {

    const slowFunction = (num) => {
        for (let i = 0; i < 1000000000; i++) { }

        return num * 2;
    }

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(true);

    // Here `useMemo` covers costly processing use case
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    // Here `useMemo` covers reference equality use case
    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark]);

    useEffect(() => {
        console.log('Theme changed...')
    }, [themeStyle]);


    return (<div>
        <h2>useMemo Hook</h2>
        <div id="demo">
            <div>
                <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            </div>
            <button onClick={() => { setDark(prevDark => !prevDark) }}>ChangeTheme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </div>
        <p><code>useMemo</code> hook is useful in 2 use cases:
        </p>
        <ul>
            <li>wrap a slow/costly method</li>
            <li>In case of referencial equality</li>
        </ul>
        <p>
            The principle behind <code>useMemo</code> hook is memoization. It is a concept that cache a return value depending on its input value.
            Should there be a re-render of the page, the memoized result is reused instead of rerunning the method itself.
            Hence reducing resource usage and useless processing time.
        </p>
        <p>The example given by <a href="https://youtu.be/THL1OPn72vo">Web Dev Spimplified</a> is excellent to demonstrate these use cases.</p>
        <pre><code>{`
// Here useMemo covers costly processing use case
const doubleNumber = useMemo(() => {
    return slowFunction(number);
}, [number]);

// Here useMemo covers reference equality use case
const themeStyle = useMemo(() => {
    return {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
}, [dark]);        
        `}</code></pre>
        <p>The first <code>useMemo</code> covers costly processing. As we watch the <code>number</code> input value to determine if we need to run the code anew.</p>
        <p>The second <code>useMemo</code> covers reference equality. Should we not wrap the <code>themeStyle</code> object into <code>useMemo</code>, we would see the <em>Theme Changed...</em> message upon updating the <code>number</code> input value though no change have been made to the theme. This is because changing that number triggers a re-render and creates a new theming object with a different reference. The code hence believes it has changed. This is simply solved by using our <code>useMemo</code> hook.</p>
    </div>);
}

export default UseMemoDemo;