import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
const logoImage = require('../../../../assets/logo.png');

export default function Logo() {
  return (
    <View style={styles.cabecalho}>
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS == 'ios' ? 20 : 0,
          alignItems: 'center',
        }}>
        <View style={styles.containerimg}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/logo.png?alt=media&token=0e2bf461-e646-4474-9d87-34df2b7a0432',
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerimg: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: Platform.OS === 'ios' ? 0 : 50,
  },
  cabecalho: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8.0,
  },
  img: {
    width: 176,
    height: 143,
    position: 'relative',
  },
});