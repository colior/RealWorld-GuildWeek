import {StyleSheet} from 'react-native';

const commonFormStyle = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: '10%',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    alignSelf: 'flex-end',
  },
});

export default commonFormStyle;
