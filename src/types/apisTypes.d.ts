interface Comments {
  questionsId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  createdAt: number;
  users: Users;
  like: number;
  dislike: number;
  usersId: number;
}

interface Questions {
  usersId: number;
  id: number;
  title: string;
  body: string;
  createdAt: number;
  users: Users;
  comments?: Comments[];
}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  image: string;
}
