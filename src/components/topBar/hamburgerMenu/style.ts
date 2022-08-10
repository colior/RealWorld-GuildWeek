import {StyleSheet} from 'react-native';
import {getScreenDimensions} from '../../utils';

const hamburgerMenuStyle = StyleSheet.create({
  iconContainer: {
    height: 40,
    width: 40,
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    right: -15,
    height: getScreenDimensions().height,
    width: getScreenDimensions().width * 0.8,
    backgroundColor: '#FFFFFF',
  },
  closeIconContainer: {
    height: 40,
    width: 40,
    alignSelf: 'flex-end',
    marginEnd: 15,
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    color: '#BBBBBB',
  },
  selectedText: {
    color: '#000000',
  },
  logoutText: {
    color: '#B85C5C',
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F3F3F3',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 100,
  },
  profileName: {
    marginTop: 10,
    color: '#373A3C',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default hamburgerMenuStyle;
