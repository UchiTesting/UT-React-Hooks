import { useEffect, useState } from "react";

const UseEffectDemo = () => {
    const initialTime = { h: 0, m: 0, s: 0 };
    const [time, setTime] = useState({ ...initialTime });

    const updateTime = () => {
        // time c'est le state
        console.log(new Date(), time);

        // pState c'est le state donc la valeur de time
        setTime(pState => {
            const newTime = { ...pState }
            if (pState.s === 59) {
                newTime.s = 0;
                newTime.m++;

                if (newTime.m === 60) {
                    newTime.m = 0;
                    newTime.h++;
                }
            } else {
                newTime.s++;
            }

            console.log("New Time => ", newTime)


            return newTime;
        });
    }

    useEffect(() => {
        const timer = window.setInterval(updateTime, 1000);

        return () => {
            console.log("UNMOUNTING UseEffectDemo component!")
            window.clearInterval(timer);
        }
    }, []);

    return (<div>
        <h2>useEffect Hook</h2>
        <p><code>useEffect</code> is to functional component what such methods as<code>componentDidMount</code>, <code>componentDidUpdate</code> or <code>componentDidUnmount</code> are to class components.</p>
        <p>It takes 2 arguments. 1<sup>st</sup> a function to execute. Then a <em>dependency array</em> that comprise the states to which respective changes are monitored. Should this array be empty, there is no state monitored yet it is ran once upon component mount.</p>
        <p>Should the dependency array be missing the return satatement will be executed anyway.</p>
        <p>The return statement of a <code>useEffect</code> hook is ran when the component is unmounted.</p>
        <p>To demonstrate useEffect, we will implement a chronometer.</p>
        <p>Try to observe in the console the messages indicating the unmounting took place by changing the page from the menu.</p>
        <p className="output">{`${time.h}:${(time.m < 10) ? `0${time.m}` : time.m}:${(time.s < 10) ? `0${time.s}` : time.s}`}</p>
    </div>);

}

export default UseEffectDemo;