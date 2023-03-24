import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { Movie } from './routes/Movie';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />}></Route>
      </Routes>
    </div>
  );
}

export default App;
