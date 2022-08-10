import React, {useState} from 'react';
import {View} from 'react-native';
import {InputBox} from '../../input/inputBox';
import {SiteButton} from '../../siteButton/siteButton';
import commonFormStyle from '../commonFormStyle';
import {Article} from '../../feeds/type';

type AddArticleFormProps = {
  onSubmit: (article: Article) => void;
};

export const AddArticleForm: React.FC<AddArticleFormProps> = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);

  return (
    <View style={commonFormStyle.container}>
      <View style={commonFormStyle.input}>
        <InputBox
          placeholder={'Article Title'}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={commonFormStyle.input}>
        <InputBox
          placeholder={'What this article about?'}
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <View style={commonFormStyle.input}>
        <InputBox
          type={'long'}
          placeholder={'Write your article (in markdown)'}
          value={body}
          onChangeText={setBody}
        />
      </View>
      <View style={commonFormStyle.input}>
        <InputBox
          placeholder={'Enter tags'}
          value={tagList.join(',')}
          onChangeText={value => {
            setTagList(value.split(','));
          }}
        />
      </View>
      <View style={commonFormStyle.button}>
        <SiteButton
          onPress={() =>
            props.onSubmit({
              title,
              body,
              description,
              tagList,
            })
          }
          title={'Publish article'}
        />
      </View>
    </View>
  );
};
