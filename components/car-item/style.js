import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body:{
      width:'100%',
      height: '100%',
    },
    image:{
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
    },
    titleContainer:{
      marginTop: '30%',
      width: '100%',
      alignItems: 'center',
    },
    title:{
      fontWeight: '500',
      fontSize: 40,
    },
    subtitle: {
      fontSize: 16,
      color: '#5c5e62',
    },
  });
  export default styles;