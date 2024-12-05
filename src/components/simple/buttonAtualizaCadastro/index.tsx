import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const iconUsuario = require('../../../../assets/iconsUsuario.png');


export default function ButtonAtualizaCadastro() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('AtualizaCadastro')}
      style={styles.btnContainer}>
      <Image
        source={iconUsuario}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: 13
  }
})