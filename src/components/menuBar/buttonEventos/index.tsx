import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const iconEventos = require('../../../../assets/menu/eventos.png');


export default function ButtonEventosBar() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MenuEventos')}
      activeOpacity={0.5}>
      <Image
        source={iconEventos}
        style={styles.img}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 47,
    height: 47,
    marginHorizontal: 24,
  },
});