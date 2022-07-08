import { useFetchData } from './useFetchData';

const BASE_URL = 'http://localhost:8000/movie';

export const useGetAllMovies = () => {
  const response = useFetchData(BASE_URL);
  return response.data;
};