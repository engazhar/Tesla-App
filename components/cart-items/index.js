import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from './style';

const Cartitem = (props) => {
  return (
    <View style={styles.body}>
      <ImageBackground 
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
      />

      <View style={styles.titleContainer}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
    </View>
  );
}
export default Cartitem;