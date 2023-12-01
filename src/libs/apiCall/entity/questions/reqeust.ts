import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

export const createQuestion = (data: Questions) =>
  sendRequest<Questions, Questions>({
    url: QuestionEndPoint.QUESTIONS_CREATE,
    body: data,
    method: 'post',
  });

export const useCreateQuestion = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: Questions) => createQuestion(data).then(res => res.data),
    onSuccess() {
      qc.refetchQueries({
        queryKey: [QuestionEndPoint.QUESTIONS_LIST],
      });
    },
  });
};

export const createQuestionComment = (data: Omit<Comments, 'id' | 'users'>) =>
  sendRequest<Comments, typeof data>({
    url: QuestionEndPoint.QUESTIONS_COMMENT_CREATE,
    body: data,
    method: 'post',
  });

export const useCreateQuestionComment = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<Comments, 'id' | 'users'>) => createQuestionComment(data).then(res => res.data),
    onSuccess(data) {
      if (data) {
        qc.refetchQueries({
          queryKey: [QuestionEndPoint.QUESTIONS_COMMENT_LIST(data.questionId)],
        });
      }
    },
  });
};

export const questionLoadComment = (id: number) =>
  sendRequest<Comments[]>({
    url: QuestionEndPoint.QUESTIONS_COMMENT_LIST(id),
  });

export const useQuestionLoadComment = (id: number) =>
  useQuery({
    queryKey: [QuestionEndPoint.QUESTIONS_COMMENT_LIST(id)],
    queryFn: () => questionLoadComment(id).then(res => res.data),
  });

export const questionLoadCommentPrefetch = (queryClient: QueryClient, id: number) =>
  queryClient.fetchQuery({
    queryKey: [QuestionEndPoint.QUESTIONS_COMMENT_LIST(id)],
    queryFn: () => questionLoadComment(id).then(res => res.data),
  });

export const commentAction = (comment: Comments) =>
  sendRequest<Comments, Comments>({
    url: QuestionEndPoint.QUESTIONS_COMMENT_ACTION(comment.id),
    method: 'put',
    body: comment,
  });

export const useCommentAction = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: Comments) => commentAction(data).then(res => res.data),
    onSuccess(data) {
      if (data) {
        const comments = qc.getQueryData<Comments[]>([
          QuestionEndPoint.QUESTIONS_COMMENT_LIST(data.questionId),
        ]);

        if (comments) {
          qc.setQueryData(
            [QuestionEndPoint.QUESTIONS_COMMENT_LIST(data.questionId)],
            comments.map(cm => {
              if (cm.id === data.id) {
                cm = data;
              }
              return cm;
            })
          );
        }
      }
    },
  });
};
