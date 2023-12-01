import { QueryClient, useQuery } from '@tanstack/react-query';
import { QuestionEndPoint } from '.';
import { sendRequest } from '../../core';

export const questionList = () => {
  return sendRequest<Questions[]>({
    url: QuestionEndPoint.QUESTIONS_LIST,
  });
};

export const questionListPrefetch = (queryClient: QueryClient) =>
  queryClient.fetchQuery({
    queryKey: [QuestionEndPoint.QUESTIONS_LIST],
    queryFn: () => questionList().then(res => res.data),
  });

export const useQuestionList = () =>
  useQuery({
    queryKey: [QuestionEndPoint.QUESTIONS_LIST],
    queryFn: () => questionList().then(res => res.data),
  });

export const questionLoad = (id: number) =>
  sendRequest<Questions>({
    url: QuestionEndPoint.QUESTIONS_LOAD(id),
  });
export const questionLoadPrefetch = (queryClient: QueryClient, id: number) =>
  queryClient.fetchQuery({
    queryKey: [QuestionEndPoint.QUESTIONS_LOAD(id)],
    queryFn: () => questionLoad(id).then(res => res.data),
  });

export const useQuestionLoad = (id: number) =>
  useQuery({
    queryKey: [QuestionEndPoint.QUESTIONS_LOAD(id)],
    queryFn: () => questionLoad(id).then(res => res.data),
  });
