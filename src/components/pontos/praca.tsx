import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { db } from '../../config/firebase';
import { auth } from '../../config/firebase';
import ButtonAtualizaCadastro from '../simple/buttonAtualizaCadastro';

export default function Praca() {
  const navigation = useNavigation();
  const [praca, setarpraca] = useState([]);

  useEffect(() => {
    db.collection('praca').onSnapshot((snapshot) => {
      setarpraca(
        snapshot.docs.map(function (doc) {
          return { info: doc.data() };
        })
      );
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: '#F8F5F5' }}>
      {praca.map((val, index) => {
        if (index < 1) {
          return (
            <>
              <View style={{ flex: 1, marginTop: Platform.OS == 'ios' ? 50 : 50 }}>
                <View style={styles.container}>
                  <ButtonAtualizaCadastro />
                  <Text style={styles.titulo}>{val.info.titulo}</Text>
                </View>
                <View style={styles.containerimg}>
                  <Image source={{ uri: val.info.imagem }} style={styles.img} />
                  <Text style={styles.titulo}>{val.info.titulo}</Text>
                  <Text style={styles.text}>{val.info.conteudo}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('RotaPraca')}
                    style={styles.btnContainer}>
                    <Text style={styles.btnText}>Conhecer Local</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('MenuPontos')}
                    style={styles.btnContainer}>
                    <Text style={styles.btnText}>Retornar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          );
        }
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: 50,
    justifyContent: 'space-around',
    marginTop: 10
  },
  titulo: {
    color: '#007FFF',
    fontSize: 20,
    fontWeight: '700',
    height: 40,
    marginHorizontal: 12,
    marginTop: 9,
    marginBottom: 0,
    width: 250,
  },
  containerimg: {
    marginTop: 10,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  img: {
    marginTop: 5,
    height: 200,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 12,
    width: '95%'
  },
  btnContainer: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007FFF',
    borderRadius: 50,
    marginTop: 20,
    marginStart: 5,
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});