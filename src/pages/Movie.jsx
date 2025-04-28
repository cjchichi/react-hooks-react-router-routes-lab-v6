/*
import { useEffect, useState } from "react";

function Movie() {
  return (
    <>
      <header>
        {/* What component should go here? *}
      </header>
      <main>
        {/* Movie info here! *}
      </main>
    </>
  );
};

export default Movie;
*/

import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import { useEffect, useState } from "react";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movies = {
      1: { 
        title: "Doctor Strange", 
        time: 115, 
        genres: ["Action", "Adventure", "Fantasy"] 
      },
      2: { 
        title: "Trolls", 
        time: 92, 
        genres: ["Animation", "Adventure", "Comedy"] 
      },
      3: { 
        title: "Jack Reacher: Never Go Back", 
        time: 118, 
        genres: ["Action", "Adventure", "Crime"] 
      }
    };
    setMovie(movies[id]);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <header>
        <NavBar />
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Time: {movie.time} minutes</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
