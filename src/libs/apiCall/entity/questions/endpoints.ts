export const QUESTIONS_LIST = '/question?_expand=users&_embed=comments&_sort=createdAt&_order=desc';
export const QUESTIONS_CREATE = '/question';
export const QUESTIONS_COMMENT_CREATE = '/comments';
export const QUESTIONS_COMMENT_LIST = (qId: number) =>
  `/comments?_expand=users&_sort=createdAt&_order=desc&questionId=${qId}`;
export const QUESTIONS_COMMENT_ACTION = (cId: number) => `/comments/${cId}`;

export const QUESTIONS_LOAD = (id: number) => `/question/${id}?_expand=users`;
