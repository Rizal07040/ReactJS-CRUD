import { Routes, Route, Link } from 'react-router-dom'
import About from './About';
import AboutTeam from './AboutTeam';
import './App.css';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
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
        <Route path="/todo" element={<Todo />} />
        <Route path="about" element={<About />}>
          <Route path="team"  element={<AboutTeam />} />
        </ Route >   
        <Route path="blog" element={<Blog />} /> 
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="login" element={<Login />} /> 
        <Route path="dashboard" element={<Dashboard />} /> 
        <Route path="*" element={<NotFound />} />           
     </Routes>
    </div>
  );
}

export default App;
