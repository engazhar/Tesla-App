import React from 'react';
import { FlatList, Text, View, Dimensions } from 'react-native';
import Caritem from '../car-item';
import styles from './style';


import cars from './cars';

const CarList = (props) => {
  

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) =>  <Caritem car={item} />}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
}
export default CarList;