import { ThemeContext, ThemeContextProvider } from "../common/ThemeContext";
import { useContext } from "react";

const UseContextDemo = () => {
    return (<div>
        <h2>useContext Hook</h2>
        <div id="demo">
            <ThemeContextProvider>
                <Toolbar />
            </ThemeContextProvider>
        </div>
        <p>Context is a mechanism that allows a hierarchy of components to get access to a common data. It is a React object that returns components. A <em>Provider</em> and a <em>Consumer</em>. When used with class components both of them are explicitely visible. With functional components only the provider is explicitely used and the consumption of the context is performs via the <code>useContext</code> hook.</p>
        <p>The basic usage of the <code>useContext</code> hook is to provide it a simple initialization data. In a bit more complex scenario like ours, we would also want to provide a way to update that context data.
        </p>
        <p>In term of code organisation, it is appreciable to separate the context logic from the place in which it will be used (typically wrapping the App component).</p>
        <p>The demo shows the toggling of theme that is spread context-wise.</p>
        <p>First, because our data lend itself well to isolation, it is written in an external file under the <em>common</em> folder.
        </p>
        <pre><code>
            {`
const themes = {
    light: {
        name: "light",
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        name: "dark",
        foreground: "#ffffff",
        background: "#222222"
    }
};

export default themes;
`}
        </code></pre>
        <p>The context and related logic is also isolated in its own file in the same folder. We want a way for any child component to be able to import the context. We also want to provide a method that update the context data. To achieve these goals:</p>
        <ul>
            <li>We create and export a context <code>const ThemeContext = React.createContext({ });</code></li>
            <li>In our custom provider component we maintain a state for the context data <code>const [theme, setTheme] = useState(defaultTheme);</code></li>
            <li>We define a function <code>toggleTheme</code> to update that data. It uses <code>useCallback</code> hook because we need to memoize and return the function itself. Note we defines the dependency array to the context data (i.e. <code>theme</code>)</li>
            <li>We created a context object that will contain the actual data and update function. It is memoized using the <code>useMemo</code> hook because we want to return only the return value <code>return &#123;theme, toggleTheme&#125;</code>.</li>
            <li>Our component returns the context provider with the context object created in the previous step in its <code>value</code> property making the data available in the children hierarchy.</li>
            <li>We export our custom provider component</li>
        </ul>
        <pre><code>{`
import React, { useCallback, useMemo, useState } from "react";

import themes from "./themes";

const defaultTheme = themes.dark;
const ThemeContext = React.createContext({});

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    const toggleTheme = useCallback(() => {
        const newTheme = (theme.name === "dark") ? themes.light : themes.dark;
        setTheme(newTheme);

    }, [theme]);

    const contextValue = useMemo(() => {
        return { theme, toggleTheme }
    }, [theme, toggleTheme]);

    return (<ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>);
}

export { ThemeContext, ThemeContextProvider };
        `}</code></pre>
        <p>Anywhere needed in that hierarchy, a component can import the context and both read and write the data.</p>
        <pre><code>{`
function ThemedButton() {
    const themeContext = useContext(ThemeContext);

    const handleThemeToggle = () => {
        themeContext.toggleTheme();
    }
    return (
        <button style={{ background: themeContext.theme.background, 
            color: themeContext.theme.foreground }} onClick={handleThemeToggle}>
            I am styled by theme context!
        </button>
    );
}
        `}</code></pre>
        <p>The last part is to actuall use our custom component and wrap the relevant hierarchy with it (typically around the App component);</p>
        <pre><code>{`
<div id="demo">
    <ThemeContextProvider>
        <Toolbar />
    </ThemeContextProvider>
</div>
        `}</code></pre>
        <p>Context is useful in such situations:</p>
        <ul>
            <li>Global state</li>
            <li>Theming</li>
            <li>Settings
                <ul>
                    <li>Application settings</li>
                    <li>User settings</li>
                    <li>Internationalisation/Localisation</li>
                </ul>
            </li>
            <li>User information</li>
            <li>Services</li>

        </ul>
    </div>);
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const themeContext = useContext(ThemeContext);

    const handleThemeToggle = () => {
        themeContext.toggleTheme();
    }
    return (
        <button style={{ background: themeContext.theme.background, color: themeContext.theme.foreground }} onClick={handleThemeToggle}>
            I am styled by theme context!
        </button>
    );
}

export default UseContextDemo;