import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer:{
    width: '100%',
    height: Dimensions.get('window').height,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  titleContainer: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom:30,
  },
  taglineTD: {
    textDecorationLine: 'underline'
  },
});
export default styles;