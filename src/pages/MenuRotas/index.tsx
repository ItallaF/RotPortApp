import React from 'react';
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
import ButtonAtualizaCadastro from '../../components/simple/buttonAtualizaCadastro';


export default function MenuRotas() {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: '#F8F5F5' }}>
      <View style={{ flex: 1, marginTop: Platform.OS == 'ios' ? 50 : 50 }}>
        <View style={styles.container}>
          <ButtonAtualizaCadastro />
          <Text style={styles.titulo}>ROTAS</Text>
        </View>
        <View style={styles.containerimg}>
          <View style={styles.containerConteudo}>
            <Text style={styles.buttonTextStyle}>Cachoeira do Serrado</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RotaCachoeira')}
              activeOpacity={0.5}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/pontos%2FCachoeira.jpg?alt=media&token=6c8481b5-e294-4ed1-90d8-1733d7fb2287',
                }}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerConteudo}>
            <Text style={styles.buttonTextStyle}>Praça Cel. Odion Coelho</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RotaPraca')}
              activeOpacity={0.5}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/pontos%2FPraca.jpeg?alt=media&token=4cb69539-bd50-46af-8fe1-a6b9399512e7',
                }}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerConteudo}>
            <Text style={styles.buttonTextStyle}>Mercado Municipal</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RotaMercado')}
              activeOpacity={0.5}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/pontos%2FMercado.jpg?alt=media&token=ca60faa9-63c8-48ff-b5e7-581ed8357f8d',
                }}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerConteudo}>
            <Text style={styles.buttonTextStyle}>
              Parque Estadual Serra Nova e Talhado
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RotaParque')}
              activeOpacity={0.5}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/pontos%2Ftalhado.JPG?alt=media&token=d5b259ba-60d7-4adb-b0ac-cefa6ed2cc9e',
                }}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerConteudo}>
            <Text style={styles.buttonTextStyle}>
              Parque Estadual Serra Nova e Talhado
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RotaIgrejaSaoJose')}
              activeOpacity={0.5}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/pontos%2FIgrejaSaoJose.jpg?alt=media&token=c7d52561-1a75-4b4a-ad7c-7f06e390f5e2',
                }}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: 30,
    justifyContent: 'space-around',
    marginTop: 10
  },
  titulo: {
    color: '#007FFF',
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 12,
    marginTop: 9,
    marginBottom: 0,
  },
  containerimg: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  containerConteudo: {
    marginTop: 20,
  },
  img: {
    borderRadius: 5,
    height: 100,
    marginTop: 0,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#E5E5E5',
    color: '#007FFF',
    width: 250,
  },
});
