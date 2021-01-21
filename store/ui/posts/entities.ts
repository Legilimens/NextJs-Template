export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type TUiPosts = {
  data: Array<TPost>;
  error: Error | null;
  loading: boolean;
};