import {StyleSheet} from 'react-native';

const feedTopBarTabStyle = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  selectedContainer: {
    borderBottomColor: '#5CB85B',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20,
    color: '#AAAAAA',
  },
  selectedText: {
    color: '#5FB95F',
  },
});

export default feedTopBarTabStyle;
