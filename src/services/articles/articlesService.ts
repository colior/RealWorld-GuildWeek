import axios from 'axios';
import {createURL, getHeaders} from '../utils';
import {Article, ArticleType} from '../../components/feeds/type';

export const getGlobalArticles = (limit?: number) => {
  return axios.get<{
    articles: ArticleType[];
    articlesCount: number;
  }>(createURL('articles'), {
    headers: getHeaders(),
    params: {limit},
  });
};

export const getYourArticles = (limit?: number) => {
  return axios.get<{
    articles: ArticleType[];
    articlesCount: number;
  }>(createURL('articles/feed'), {
    headers: getHeaders(),
    params: {limit},
  });
};

export const favoriteArticle = (slug: string) => {
  return axios.post(createURL(`articles/${slug}/favorite`), undefined, {
    headers: getHeaders(),
  });
};

export const unfavoriteArticle = (slug: string) => {
  return axios.delete(createURL(`articles/${slug}/favorite`), {
    headers: getHeaders(),
  });
};

export const postArticle = (article: Article) => {
  return axios.post(
    createURL('articles'),
    {
      article,
    },
    {
      headers: getHeaders(),
    },
  );
};
