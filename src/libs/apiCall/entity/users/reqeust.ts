import { QueryClient, useQuery } from '@tanstack/react-query';
import { UserEndPoint } from '.';
import { sendRequest } from '../../core';

export const userLoad = (id: number) =>
  sendRequest<Users>({
    url: UserEndPoint.USER_LOAD(id),
  });

// export const userLoadPrefetch = (queryClient: QueryClient, id: number) =>
//   queryClient.fetchQuery({
//     queryKey: [UserEndPoint.USER_LOAD(id)],
//     queryFn: () => userLoad(id).then(res => res.data),
//   });

export const useUserLoad = (id: number) =>
  useQuery({
    queryKey: [UserEndPoint.USER_LOAD(id)],
    queryFn: () => userLoad(id).then(res => res.data),
  });
