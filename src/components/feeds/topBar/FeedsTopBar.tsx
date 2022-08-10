import React from 'react';
import {View} from 'react-native';
import {FeedsTopBarTab} from './feedTopBarTab/FeedTopBarButton';
import feedTopBarStyle from './style';

type FeedsTopBarProps = {
  tabs: FeedTab[];
  selectedTab: string;
};

export type FeedTab = {
  id: string;
  title: string;
  onSelect: () => void;
};

export const FeedsTopBar: React.FC<FeedsTopBarProps> = props => {
  return (
    <View style={feedTopBarStyle.container}>
      {props.tabs.map((tab, i) => (
        <FeedsTopBarTab
          key={`feeds-top-bar-tab-${i}`}
          onPress={tab.onSelect}
          isSelected={props.selectedTab === tab.id}
          title={tab.title}
        />
      ))}
    </View>
  );
};
