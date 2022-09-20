import { api } from 'api/api';

export async function createAd<T, K = {}>(id: string, body: K) {
  const response = await api.post<T>(`/games/${id}/ads`, body);

  return response;
}

export async function findAllLastAds<T>() {
  const response = await api.get<T>('/ads');

  return response;
}