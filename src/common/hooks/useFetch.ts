import { useEffect, useState } from "react";

/**
 * A custom hook for handling asynchronous data fetching.
 *
 * @template T - The type of data being fetched
 * @template P - The type of parameters to pass to the fetch function
 * @param {((...args: P) => Promise<T>) | (() => Promise<T>)} fn - The asynchronous function to fetch data, can be called with or without parameters
 * @param {P} [params] - Optional parameters to pass to the fetch function
 * @param {any[]} [dependencies=[]] - Optional dependencies array to trigger refetching
 * @returns {readonly [T | null, boolean, Error | null]} - A tuple containing:
 *   - data: The fetched data or null if not yet loaded
 *   - loading: Boolean indicating if the fetch operation is in progress
 *   - error: Error object if the fetch operation failed, otherwise null
 *
 * @example
 * ```tsx
 * // Without parameters
 * const [data, loading, error] = useFetch(() => api.fetchSomeData());
 *
 * // With parameters
 * const [data, loading, error] = useFetch(
 *   (id, page) => api.fetchSomeData(id, page),
 *   [123, 1],
 *   [id, page] // Will refetch when these dependencies change
 * );
 *
 * if (loading) return <LoadingSpinner />;
 * if (error) return <ErrorMessage message={error.message} />;
 * if (data) return <DisplayData data={data} />;
 * ```
 */
export const useFetch = <T, P extends unknown[] = []>(
	fn: ((...args: P) => Promise<T>) | (() => Promise<T>),
	params?: P,
) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);


	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const result = params !== undefined ? await fn(...params) : await fn();
				setData(result);
			} catch (err) {
				setError(err instanceof Error ? err : new Error('Failed to fetch data'));
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [fn, params]);

	return [data, loading, error] as const;
}
