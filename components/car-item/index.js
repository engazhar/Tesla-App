import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from './style';
import StyledButton from '../style-button';

const Caritem = (props) => {
  const { name, tagline, taglineTD, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}{' '}
          <Text style={styles.taglineTD}>
            {taglineTD}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"custom order"}
          onPress={() => {
            console.warn("custom order buttom");
          }}
        />

        <StyledButton
          type="secondary"
          content={"existing inventory"}
          onPress={() => {
            console.warn("custom order buttom");
          }}
        />
      </View>
    </View>
  );
}
export default Caritem;