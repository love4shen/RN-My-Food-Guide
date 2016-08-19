import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const FoodAndServingSize = ({ fgcatId, foodAndSize, mapCatid2Cat }) => (
  <View>
  <Text>{mapCatid2Cat[fgcatId]}</Text>
  {foodAndSize.map(({ srvg_sz, food }, i) => (
    <View key={`FdNSz${i}`}>
      <Text>{food}</Text>
      <Text>{srvg_sz.replace(/&frac12;/g, '½').replace(/&frac14;/g, '¼')}</Text>
    </View>
  ))}
  </View>

);

const styles = StyleSheet.create({
});

export default FoodAndServingSize;
