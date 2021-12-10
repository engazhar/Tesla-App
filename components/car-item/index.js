import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from './style';
import StyledButton from '../style-button';

const Caritem = (props) => {
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

      <View>
      <StyledButton 
        type="primary"
        content={"custom order"}
        onPress= {() => {
          console.warn("custom order buttom");
        }}
        />

        <StyledButton 
        type="secondary"
        content={"existing inventory"}
        onPress= {() => {
          console.warn("custom order buttom");
        }}
        />
      </View>
    </View>
  );
}
export default Caritem;