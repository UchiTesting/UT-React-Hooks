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