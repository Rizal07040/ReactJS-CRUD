import { Routes, Route, Link } from 'react-router-dom'
import About from './About';
import './App.css';
import Home from './Home';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
     <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/todo">Todo</Link>
     </nav>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
     </Routes>
    </div>
  );
}

export default App;
