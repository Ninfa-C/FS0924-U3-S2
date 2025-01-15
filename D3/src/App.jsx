import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NetflixNav from "./components/NetflixNav";
import NetflixFooter from "./components/NetflixFooter";
import NetflixHome from "./components/NetflixHome";
import NetflixHelp from "./components/NeflixHelp";
import NetflixProfile from "./components/NetflixProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [query, setQuery] = useState("");

  const change = (query) => {
    setQuery(query);
  };

  return (
    <BrowserRouter>
      <header>
        <NetflixNav searchSubmit={change} />
      </header>

      <main>
        {/*Come per U3-W1-D2/3 per aggiornare un componente è necessario passargli una 
          key perchè aggiornando a key si aggiorna il componente perchè è come se fosse diverso */}
        <Routes>
          <Route path="/" element={<NetflixHome key={query} query={query} />} />
          <Route path='/Tv-Show' element={<TvShows/>} />
          <Route path="/Profile" element={<NetflixProfile />} />
          <Route path="/Help" element={<NetflixHelp />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails/>}/>
        </Routes>
      </main>

      <NetflixFooter />
    </BrowserRouter>
  );
}

export default App;
