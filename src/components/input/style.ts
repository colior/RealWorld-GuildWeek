import {StyleSheet} from 'react-native';

const inputBoxStyle = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderRadius: 5,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    height: 50,
    width: '100%',
    padding: 10,
    fontSize: 16,
    justifyContent: 'center',
  },
  focusInput: {
    borderColor: '#66AFE9',
  },
  invalidInput: {
    borderColor: '#c50000',
  },
  narrowInput: {
    fontSize: 14,
    height: 40,
  },
  longInput: {
    height: 200,
  },
});

export default inputBoxStyle;
