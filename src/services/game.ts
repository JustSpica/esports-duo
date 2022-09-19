import { api } from 'api/api';

export async function findGameById<T>(id: string) {
  const response = await api.get<T>(`/games/${id}`);

  return response;
}

export async function findAllGames<T>() {
  const response = await api.get<T>('/games');

  return response;
}