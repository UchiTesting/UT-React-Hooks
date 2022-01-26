import useDoAnything from "../common/doAnything";

const UseCustomDemo = () => {

    const result = useDoAnything();

    return (<div>
        <h2>Custom Hooks</h2>
        <div id="demo">
            <ActivityDisplay payload={result} />
        </div>
        <p>Put simply custom hooks are simple functions which names start with <em>use</em>. Their main benefit is gather common hook logic that could be reused in several components.</p>
        <p>They must be used at top level in a component</p>
        <p>The demo uses a custom hook to fetch data on an API endpoint. Then it displays some data from it.</p>
    </div>);
}

function ActivityDisplay({ payload }) {
    return (<div style={{ border: "0.1em rgba(255, 255, 0, 0.1) solid", borderRadius: "15px" }}>
        {(payload.status === 'fetched') ? (
            <>
                <p className="output">{payload.data.type}</p>
                <p className="output">{payload.data.activity}</p>
                <p className="output">{payload.data.participants}</p>
                <br />
                <span>Accessibility: </span><Score val={payload.data.accessibility} />
                <span>Cost: </span> <Score val={payload.data.price} />
            </>
        ) : <p>Loading...</p>}
    </div>);
}

function Score({ val }) {
    const result = () => {
        switch (true) {
            case val <= 0.19: return '⭐';
            case val <= 0.39: return '⭐⭐';
            case val <= 0.59: return '⭐⭐⭐';
            case val <= 0.79: return '⭐⭐⭐⭐';
            case val >= 0.8: return '⭐⭐⭐⭐⭐';
            default: return '';
        }
    }
    return (<>
        <p className="score-box">{`${result()} (${val})`}</p>
    </>);
}

export default UseCustomDemo;