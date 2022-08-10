import React from 'react';
import {SafeAreaView, View} from 'react-native';
import TopBar from '../components/topBar/topBar';
import commonScreenStyle from '../styles/commonScreenStyle';

type ScreenBaseProps = {
  children: any;
  componentId: string;
};

const ScreenBase: React.FC<ScreenBaseProps> = props => {
  return (
    <View style={commonScreenStyle.root}>
      <SafeAreaView style={commonScreenStyle.mainContainer}>
        <TopBar componentId={props.componentId} />
        {props.children}
      </SafeAreaView>
    </View>
  );
};

export default ScreenBase;
