import {StyleSheet} from 'react-native';

const homeScreenStyle = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
    paddingTop: 20,
    paddingBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
  },
  title: {
    marginTop: 5,
    fontSize: 30,
  },
  followButton: {
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9C9C9C',
  },
  followButtonText: {
    color: '#9C9C9C',
  },
});

export default homeScreenStyle;
