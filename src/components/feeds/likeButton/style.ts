import {StyleSheet} from 'react-native';

const likeButtonStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#5CB85C',
  },
  containerDisabled: {
    borderWidth: 0,
  },
  icon: {
    marginEnd: 5,
  },
  text: {
    color: '#5CB85C',
    fontSize: 16,
  },
});

export default likeButtonStyle;
