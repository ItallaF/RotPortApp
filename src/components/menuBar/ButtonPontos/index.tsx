import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
const iconPontos = require('../../../../assets/menu/pontos.png');

export default function ButtonPontosBar() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MenuPontos")}
      activeOpacity={0.5}>
      <Image
        source={iconPontos}
        style={styles.img}
      />
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  img: {
    width: 42,
    height: 47,
    marginHorizontal: 24,
  },
});