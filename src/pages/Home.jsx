
import NavBar from "../components/NavBar.jsx";
import MovieCard from "../components/MovieCard.jsx";

function Home() {
  const movies = [
    { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] },
    { id: 2, title: "Trolls", time: 92, genres: ["Animation", "Adventure", "Comedy"] },
    { id: 3, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action", "Adventure", "Crime"] }
  ];

  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        <p>Welcome to our movie database!</p>
        {movies.map(movie => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
