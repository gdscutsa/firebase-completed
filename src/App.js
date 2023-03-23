import { Routes, Route } from 'react-router-dom';
import { Movies } from './routes/Movies';
import { MoviePage } from './routes/MoviePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MoviePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
