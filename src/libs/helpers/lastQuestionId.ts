export const lastQId = () => {
  const id = parseInt(localStorage.getItem('lastQId') || '2');
  setLastQId((id + 1).toString());
  return id;
};
export const setLastQId = (id: string) => {
  localStorage.setItem('lastQId', id);
};
