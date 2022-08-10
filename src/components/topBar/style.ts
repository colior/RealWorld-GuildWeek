import {StyleSheet} from 'react-native';

const topBarStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    zIndex: 9999,
  },
  logo: {
    height: 20,
    width: 100,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default topBarStyle;
