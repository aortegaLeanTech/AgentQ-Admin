import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchApi } from '../client';

interface LoginCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: LoginCredentials) => 
      fetchApi<{ user: User; token: string }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      }),
  });
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => fetchApi<User>('/auth/me'),
  });
};
