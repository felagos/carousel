import { create } from 'zustand';
import { MovieDetail } from '../../domain/movie.domain';

type MovieStore = {
  movies: MovieDetail[];
	setMovies: (movies: MovieDetail[]) => void;
}

export type MovieStoreState = typeof useMovieStore.getState;

export const useMovieStore = create<MovieStore>()((set) => ({
	movies: [],
	setMovies: (movies) => set({ movies }),
}))
