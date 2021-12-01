import { Login } from './pages/Login';
import ForgetPass from './pages/ForgetPass';
import SignUp from './pages/SignUp';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgetPass" element={<ForgetPass />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
