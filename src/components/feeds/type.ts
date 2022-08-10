export type Author = {
  username: string;
  image: string;
  following: boolean;
};

export type Article = {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
};

export type ArticleType = Article & {
  slug: string;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
};
