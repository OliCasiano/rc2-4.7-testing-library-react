

export const Tarjetita = () => {

    const movie = {
        title: "El Padrino",
        year: 1972,
        director: "Francis Ford Coppola",
        genre: "Crimen, Drama",
        synopsis: "La historia de la poderosa familia Corleone y cómo se ve envuelta en el mundo del crimen organizado.",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlOWE1ZDA3YWQ0XkEyXkFqcGdeQXVyNzkwMjY5MDA@._V1_SX300.jpg",
    };




    return (
        <div className="movie">
            <h2>{movie.title} ({movie.year})</h2>
            <p>Director: {movie.director}</p>
            <p>Género: {movie.genre}</p>
            <p>Sinopsis: {movie.synopsis}</p>
            <img src={movie.poster} alt={title} />
        </div>
    )
}
