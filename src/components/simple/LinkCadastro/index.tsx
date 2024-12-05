import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LinkCadastro() {
  const navigation = useNavigation();
  return (
    <Text style={styles.text}>
      Ainda não é cadastrado?
      <Text
        style={styles.linkSubscribe}
        onPress={() => navigation.navigate("Cadastro")}>
        Cadastre-se agora...
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    color: '#000000',
  },
  linkSubscribe: {
    color: '#01B866',
    fontSize: 18,
    fontWeight: '400',
  },
})