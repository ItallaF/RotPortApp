import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const iconRotas = require('../../../../assets/menu/rotas.png');


export default function ButtonRotasBar() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MenuRotas')}
      activeOpacity={0.5}>
      <Image
        source={iconRotas}
        style={styles.img}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 36,
    height: 47,
    marginHorizontal: 24,
  },
});