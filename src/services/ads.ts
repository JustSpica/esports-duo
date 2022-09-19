import { api } from 'api/api';

export async function findAllLastAds<T>() {
  const response = await api.get<T>('/ads');

  return response;
}