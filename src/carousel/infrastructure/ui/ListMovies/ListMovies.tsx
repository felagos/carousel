import { MovieDetail } from "../../../domain/movie.domain";

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
					<span className="movie__title">{movie.title}</span>
					<span className="movie__overview">{movie.overview}</span>

					<video className="movie__video" autoPlay muted loop>
						<source src="/src/assets/video.mp4" type="video/mp4" />
						<source src="/src/assets/video.webm" type="video/webm" />
					</video>
				</div>
			))}
		</div>
	);
};
