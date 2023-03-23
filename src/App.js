import { Routes, Route } from 'react-router-dom';
import { Movies } from './routes/Movies';
import { MoviePage } from './routes/Movie';

function App() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);

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
