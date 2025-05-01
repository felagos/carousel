import { MovieDetail } from "../../domain/movie.domain";

import "./ListMovies.scss";

interface Props {
	movies: MovieDetail[];
}

export const ListMovies: React.FC<Props> = ({ movies }) => {
	return (
		<div className="movies">
			{movies.map((movie) => (
				<div key={movie.id} className="movie">
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
						alt={movie.title}
						className="movie__image"
					/>
					<h3 className="">{movie.title}</h3>
					<p className="">{movie.release_date}</p>
				</div>
			))}
		</div>
	);
};
