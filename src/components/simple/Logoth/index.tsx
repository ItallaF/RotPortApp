import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function Logout() {
  return (
    <>
      <TouchableOpacity style={styles.btnIcon}>
        <Text style={styles.iconbtn}>
          <MaterialCommunityIcons
            name="location-exit"
            size={23}
            color="#8fdcf7" />
        </Text>
      </TouchableOpacity><Text style={{ marginTop: 150 }}></Text>
    </>
  );
}

const styles = StyleSheet.create({
  btnIcon: {
  width: 60,
  height: 60,
  position: 'absolute',
  bottom: 30,
  right: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
iconbtn: {
  color: '#0b5228',
  fontWeight: 'bold',
  fontSize: 25,
},
})
