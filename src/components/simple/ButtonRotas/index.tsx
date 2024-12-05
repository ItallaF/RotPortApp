import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ButtonRotas() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MenuRotas')}
      activeOpacity={0.5}>
      <Image
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/rotas.jpg?alt=media&token=996ce294-411c-4d07-ac4e-5f1c2a31b192',
        }}
        style={styles.img}
      />
      <View style={styles.buttonMenu}>
        <Text style={styles.buttonTextStyle}>Rotas</Text>
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