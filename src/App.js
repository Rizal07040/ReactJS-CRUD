import { Route, Routes   } from 'react-router-dom'
import './App.css';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LihatData from './pages/LihatData';
import Profile from './pages/Profile';
import Tambah from './pages/Tambah';
import Edit from './pages/Edit';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
       <Routes>
        <Route path="/" element={<LihatData />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tambah" element={<Tambah />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
