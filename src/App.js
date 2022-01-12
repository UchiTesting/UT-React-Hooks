import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UseStateDemo from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import UseRefDemo from './components/UseRefDemo';
import UseCallbackDemo from './components/UseCallbackDemo';
import UseReducerDemo from './components/UseReducerDemo';
import UseMemoDemo from './components/UseMemoDemo';
import UseLayoutEffectDemo from './components/UseLayoutEffectDemo';
import UseDebugDemo from './components/UseDebugDemo';
import UseCustomDemo from './components/UseCustomDemo';

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <h1>React Hooks</h1>
      <Routes>
        <Route path="/" element={<UseStateDemo />} />
        <Route path="use-state" element={<UseStateDemo />} />
        <Route path="use-effect" element={<UseEffectDemo />} />
        <Route path="use-ref" element={<UseRefDemo />} />
        <Route path="use-callback" element={<UseCallbackDemo />} />
        <Route path="use-reducer" element={<UseReducerDemo />} />
        <Route path="use-memo" element={<UseMemoDemo />} />
        <Route path="use-layout-effect" element={<UseLayoutEffectDemo />} />
        <Route path="use-debug" element={<UseDebugDemo />} />
        <Route path="use-custom" element={<UseCustomDemo />} />
      </Routes>

    </div >
  );
}

export default App;
