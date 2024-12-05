import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

export default function ButtonPontos() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MenuPontos")}
      activeOpacity={0.5}>
      <Image
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/pontos%2FCachoeira.jpg?alt=media&token=6c8481b5-e294-4ed1-90d8-1733d7fb2287',
        }}
        style={styles.img}
      />
      <View style={styles.buttonMenu}>
        <Text style={styles.buttonTextStyle}>Pontos Turisticos</Text>
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  img: {
    marginTop: 5,
    height: 100,
    borderRadius: 5,
  },
  buttonMenu: {
    backgroundColor: '#E5E5E5',
    width: 150,
    height: 28,
    borderBottomRightRadius: 11
  },
  buttonTextStyle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#007FFF',
    textAlign: 'left',
  },
});