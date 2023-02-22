import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import UserCreate from './pages/UserCreate';
import UserUpdate from './pages/UserUpdate';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<UserCreate />} />
        <Route path="/update/:id" element={<UserUpdate />} />
      </Routes>
    </div>
  );
}

export default App;