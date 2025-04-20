import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

/**
 * Interface defining the API client capabilities
 * Extends AxiosInstance to include all axios methods
 */
export type HttpClient = AxiosInstance;

/**
 * Axios instance configured for API communication.
 * Uses environment variables for base URL and authentication.
 *
 * @constant
 * @type {HttpClient}
 */
const apiClient: HttpClient = axios.create({
	baseURL: import.meta.env.VITE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
}) as HttpClient;

/**
 * Request interceptor to automatically add authentication token to requests.
 * Retrieves token from environment variables.
 */
apiClient.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = import.meta.env.VITE_TOKEN;

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

/**
 * Response interceptor for global response handling.
 * Can be expanded for centralized error handling, logging, etc.
 */
apiClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default apiClient;
