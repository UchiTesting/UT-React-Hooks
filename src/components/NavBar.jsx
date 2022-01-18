import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/use-state">useState Demo</Link>
            <Link to="/use-effect">useEffect Demo</Link>
            <Link to="/use-ref">useRef Demo</Link>
            <Link to="/use-memo">useMemo Demo</Link>
            <Link to="/use-callback">useCallback Demo</Link>
            <br />
            <Link to="/use-reducer">useReducer Demo</Link>
            <Link to="/use-layout-effect">useLayoutEffect Demo</Link>
            <Link to="/use-debug">useDebug Demo</Link>
            <Link to="/use-custom">Custom Hooks Demo</Link>
        </nav>)
}

export default NavBar;