import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import articleStyle from './style';
import {UserDetails} from '../../userDetails/UserDetails';
import {ArticleType} from '../type';
import {LikeButton} from '../likeButton/LikeButton';
import store from '../../../stateManagement/store';
import {
  favoriteArticle,
  unfavoriteArticle,
} from '../../../services/articles/articlesService';
import {Tag} from '../tag/Tag';

type ArticleProps = {
  article: ArticleType;
  onArticleChanged: (articleToUpdate: ArticleType) => void;
  componentId: string;
};

export const Article: React.FC<ArticleProps> = props => {
  const [isExpanded, setIsExpanded] = useState<boolean | undefined>(undefined);

  return (
    <View style={articleStyle.wrapper}>
      <View style={articleStyle.headerContainer}>
        <View style={articleStyle.detailsContainer}>
          <UserDetails
            componentId={props.componentId}
            username={props.article.author.username}
            image={props.article.author.image}
            commentTimestamp={new Date(props.article.createdAt)}
          />
        </View>
        <View style={articleStyle.likesContainer}>
          <LikeButton
            disabled={!store.currentUser}
            count={props.article.favoritesCount}
            favorited={props.article.favorited}
            onLike={() => {
              favoriteArticle(props.article.slug)
                .then(res => {
                  props.onArticleChanged(res.data.article);
                })
                .catch(e => {
                  console.error(e.response.data.message);
                });
            }}
            onUnlike={() => {
              unfavoriteArticle(props.article.slug)
                .then(res => {
                  props.onArticleChanged(res.data.article);
                })
                .catch(e => {
                  console.error(e.response.data.message);
                });
            }}
          />
        </View>
      </View>
      <View style={articleStyle.body}>
        <Text style={articleStyle.title}>{props.article.title}</Text>
        <Text
          onTextLayout={e => {
            e.nativeEvent.lines.length > 1 &&
              isExpanded === undefined &&
              setIsExpanded(false);
          }}
          numberOfLines={isExpanded || isExpanded === undefined ? undefined : 1}
          style={articleStyle.description}>
          {props.article.body}
        </Text>
        <TouchableOpacity
          style={articleStyle.readMoreContainer}
          onPress={() => setIsExpanded(!isExpanded)}>
          {isExpanded !== undefined && (
            <Text style={articleStyle.readMoreText}>
              {isExpanded ? 'Read less' : 'Read more...'}
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={articleStyle.tags}>
        {props.article.tagList &&
          props.article.tagList.map((tag, index) => (
            <View
              key={`${props.article.slug}-tag-${index}`}
              style={articleStyle.tag}>
              <Tag text={tag} />
            </View>
          ))}
      </View>
    </View>
  );
};
