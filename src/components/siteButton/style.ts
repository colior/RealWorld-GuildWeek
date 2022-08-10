import {StyleSheet} from 'react-native';

const siteButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: '#5CB85C',
    onPressColor: '#449d44',
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  button: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default siteButtonStyle;
