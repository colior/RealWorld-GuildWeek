import React from 'react';
import {View} from 'react-native';
import ScreenBase from '../screenBase';
import AddArticleScreenStyle from './style';
import {AddArticleForm} from '../../components/forms/addArticleForm/AddArticleForm';
import {postArticle} from '../../services/articles/articlesService';
import {navigate} from '../../navigation/navigationUtils';
import {ScreensDetails} from '../screenDetails';

type NewArticleScreenProps = {
  componentId: string;
};

const AddArticleScreen: React.FC<NewArticleScreenProps> = props => {
  return (
    <ScreenBase componentId={props.componentId}>
      <View style={AddArticleScreenStyle.container}>
        <AddArticleForm
          onSubmit={article => {
            postArticle(article)
              .then(res => {
                navigate(ScreensDetails.App, props.componentId);
              })
              .catch(e => {
                console.error('Failed to post article');
              });
          }}
        />
      </View>
    </ScreenBase>
  );
};

export default AddArticleScreen;
