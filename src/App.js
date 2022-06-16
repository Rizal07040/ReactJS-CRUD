import { Link, Route, Routes   } from 'react-router-dom'
import {Nav ,Container ,} from 'react-bootstrap'
import './App.css';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Tambah from './pages/Tambah';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
    <Container>
    <Nav className='navbar navbar-expand-lg fixed-top navbar-dark main-color shadow p-3 mb-5'>
      
        <Nav.Item ><Nav.Link as={Link}  to="/">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={Link} to="/profile">Profile</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={Link}  to="/blog">Blog</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={Link}  to="/contact">Contact</Nav.Link></Nav.Item>
      </Nav>
      
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tambah" element={<Tambah />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
    </Container>
     
    </div>
  );
}

export default App;
