export const QUESTIONS_LIST = '/question?_expand=users&_embed=comments&_sort=createdAt&_order=desc';

export const QUESTIONS_LOAD = (id: number) => `/question/${id}?_expand=users&_embed=comments&_sort=createdAt&_order=desc`;
