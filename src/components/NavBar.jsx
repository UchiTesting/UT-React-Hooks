import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/use-state">useState</Link>
            <Link to="/use-effect">useEffect</Link>
            <Link to="/use-context">useContext</Link>
            <Link to="/use-ref">useRef</Link>
            <Link to="/use-memo">useMemo</Link>
            <Link to="/use-callback">useCallback</Link>
            <Link to="/use-reducer">useReducer</Link>
            <br />
            <Link to="/use-layout-effect">useLayoutEffect</Link>
            <Link to="/use-debug">useDebug</Link>
            <Link to="/use-imperative-handle">useImperativeHandle</Link>
            <Link to="/use-custom">Custom Hooks</Link>
        </nav>)
}

export default NavBar;