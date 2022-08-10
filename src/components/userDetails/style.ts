import {StyleSheet} from 'react-native';

const userDetailsStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  textContainer: {
    marginLeft: 5,
  },
  username: {
    fontSize: 16,
    color: '#5CB85B',
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#BBBBBB',
  },
});

export default userDetailsStyle;
