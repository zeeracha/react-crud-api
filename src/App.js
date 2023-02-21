import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import UserCreate from './pages/userCreate';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<UserCreate />} />
      </Routes>
    </div>
  );
}

export default App;