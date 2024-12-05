import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const iconRotas = require('../../../../assets/menu/voltar.png');


export default function ButtonVoltarBar() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={iconRotas}
        style={styles.img}
      />
    </TouchableOpacity> 
  );
}

const styles = StyleSheet.create({
  img: {
    width: 38,
    height: 47,
    marginHorizontal: 12,
  },
});
