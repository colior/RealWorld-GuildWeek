import React from 'react';
import {Text, View} from 'react-native';
import ScreenBase from '../screenBase';
import homeScreenStyle from './style';
import {Feeds} from '../../components/feeds/Feeds';
import {AddButton} from '../../components/addButton/AddButton';
import {navigate} from '../../navigation/navigationUtils';
import {ScreensDetails} from '../screenDetails';
import store from '../../stateManagement/store';

type AppProps = {
  componentId: string;
};

const HomeScreen: React.FC<AppProps> = props => {
  return (
    <ScreenBase componentId={props.componentId}>
      <View style={homeScreenStyle.header}>
        <Text style={homeScreenStyle.title}>conduit</Text>
        <Text style={homeScreenStyle.subTitle}>
          A place to share your knowledge.
        </Text>
      </View>
      <Feeds componentId={props.componentId} tabs={['yourFeed', 'global']} />
      {store.currentUser && (
        <AddButton
          onPress={() => {
            navigate(ScreensDetails.AddArticleScreen, props.componentId);
          }}
        />
      )}
    </ScreenBase>
  );
};

export default HomeScreen;
