export type PostsType = {
  id: string;
  title: string;
  content: string;
  author: string;
  categoryName: string;
}

export type PostResponse = Omit<PostsType, 'id'>
