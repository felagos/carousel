import { create } from 'zustand';
import { MovieDetail } from '../../domain/movie.domain';

type MovieStore = {
  movies: MovieDetail[];
	setMovies: (movies: MovieDetail[]) => void;
}

export const useMovieStore = create<MovieStore>()((set) => ({
	movies: [],
	setMovies: (movies) => set({ movies }),
}))
