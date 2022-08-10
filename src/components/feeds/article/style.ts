import {StyleSheet} from 'react-native';

const articleStyle = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flex: 2,
  },
  likesContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  body: {
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    width: '100%',
  },
  readMoreContainer: {
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  readMoreText: {
    color: '#BBBBBB',
  },
  tags: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  tag: {
    marginEnd: 5,
    marginTop: 5,
  },
});

export default articleStyle;
