import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import styles from './style';

const StyledButton = (props) => {

  const {content, type, onPress} = props;
  const backgroundColor = type === "primary" ? '#171A20CC' : '#FFFFFF';
  const textColor = type === "primary" ? '#FFFFFF' : '#171A20';
  

  return (
    <View style={styles.container}>
      <Pressable 
      style={[styles.button, {backgroundColor:backgroundColor}]}
      onPress= {() => onPress()}
      >
        <Text style={[styles.text, {color:textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
}
export default StyledButton;