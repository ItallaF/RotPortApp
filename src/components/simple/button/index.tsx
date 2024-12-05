import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function Button() {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 85 }}>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#007FFF',
    borderRadius: 50,
    marginTop: 5,
  },

  btnText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#F8F5F5',
    fontWeight: 'normal',
    fontSize: 20,
    fontfamily: 'Inter'
  },
})
