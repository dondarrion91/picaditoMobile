import {StyleSheet} from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center',
    height: '70%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1A73E9',
    borderRadius: 5,
  },
  buttonContainer: {
    height: 50,
    width: '100%',
    marginVertical: 10,
  },
  buttonWrapper: {
    width: '90%',
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    height: '30%',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 25,
    borderBottomWidth: 1,
    padding: 10,
  },
  title: {
    color: '#1A73E9',
    margin: 25,
  },
  googleButtonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  googleIcon: {
    height: 24,
    width: 24,
  },
  googleButtonText: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 34,
    paddingVertical: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {display: 'flex', alignItems: 'center'},
});
