import { Routes, Route } from 'react-router-dom';
import { Movies } from './routes/Movies';
import { Login } from './routes/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
