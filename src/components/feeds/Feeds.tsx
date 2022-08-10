import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import {FeedsTopBar, FeedTab} from './topBar/FeedsTopBar';
import {
  getGlobalArticles,
  getYourArticles,
} from '../../services/articles/articlesService';
import {ArticleType} from './type';
import {Article} from './article/Article';
import store from '../../stateManagement/store';
import feedsStyle from './style';

type FeedsProps = {
  componentId: string;
  tabs: TabType[];
};

const TabTypes = {
  global: 'global',
  yourFeed: 'yourFeed',
} as const;

type TabType = keyof typeof TabTypes;

export const Feeds: React.FC<FeedsProps> = props => {
  const [selectedTab, setSelectedTab] = useState('global');
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [isLoading, setsetIsLoading] = useState(false);
  const allTabs = {
    globalTab: {
      id: 'global',
      title: 'Global Feed',
      onSelect: () => setSelectedTab('global'),
    },
    yourFeedTab: {
      id: 'yourFeed',
      title: 'Your Feed',
      onSelect: () => setSelectedTab('yourFeed'),
    },
  };

  const [tabs, setTabs] = useState<FeedTab[]>([allTabs.globalTab]);

  if (store.currentUser?.username && tabs[0].id !== allTabs.yourFeedTab.id) {
    setTabs([allTabs.yourFeedTab, allTabs.globalTab]);
    setSelectedTab(allTabs.yourFeedTab.id);
  }

  useEffect(() => {
    let articlesToGet;
    if (selectedTab === 'global') {
      setsetIsLoading(true);
      articlesToGet = getGlobalArticles();
    } else if (selectedTab === 'yourFeed') {
      setsetIsLoading(true);
      articlesToGet = getYourArticles();
    }
    articlesToGet &&
      articlesToGet
        .then(res => {
          setArticles(res.data.articles);
        })
        .catch(() => Alert.alert('failed to get articles'))
        .finally(() => setsetIsLoading(false));
  }, [tabs, selectedTab]);

  return (
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <FeedsTopBar tabs={tabs} selectedTab={selectedTab} />
      {isLoading ? (
        <Text style={feedsStyle.title}>Loading articles...</Text>
      ) : articles.length > 0 ? (
        articles.map((article, index) => (
          <Article
            componentId={props.componentId}
            article={article}
            key={`article-${index}`}
            onArticleChanged={articleToUpdate => {
              setArticles(
                articles.map(article1 =>
                  article1.slug === articleToUpdate.slug
                    ? articleToUpdate
                    : article1,
                ),
              );
            }}
          />
        ))
      ) : (
        <Text style={feedsStyle.title}>No articles are here... yet.</Text>
      )}
    </ScrollView>
  );
};
