import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function ButtonEventos() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MenuEventos')}
      activeOpacity={0.5}>
      <Image
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/eventos%2FFestival%20de%20outono.jpeg?alt=media&token=439ad050-8d01-455a-aecb-e861b209c60f',
        }}
        style={styles.img}
      />
      <View style={styles.buttonMenu}>
        <Text style={styles.buttonTextStyle}>Eventos</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    marginTop: 5,
    height: 100,
    borderRadius: 5,
    position: 'relative',
  },
  buttonMenu: {
    backgroundColor: '#E5E5E5',
    width: 120,
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