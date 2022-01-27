import useFetch from '../common/useFetch';

import image from '../static/img/useDebugValueDemo.png'

const UseDebugDemo = () => {
    const endPoint = 'https://cat-fact.herokuapp.com/facts/';
    const result = useFetch(endPoint);

    return (<div>
        <h2>useDebugValue Hook</h2>
        <div id="demo">
            {(result.status === "fetched") ? result.data.map(adv => <CatAdvice key={adv._id} val={adv} />) : <p>Loading...</p>}
        </div>
        <p>One obvious way to understand  or check what's going on while developping with JS is to add <code>console.log</code> statements where needed.
            This can be seen as a poor practice.</p>
        <p>When developping custom hooks with React, we can have a value displayed in the React Dev Tool instead. The image bellow shows an example. You can of course open the dev tools in the browser to check.</p>
        <img src={image} alt="Data displayed in the react Dev Tools" />
    </div>);
}

function CatAdvice({ val }) {

    return (<div className="cat-advice">{val.text}</div>);
}

export default UseDebugDemo;