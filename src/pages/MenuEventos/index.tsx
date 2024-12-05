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
import { auth } from '../../config/firebase';
import ButtonAtualizaCadastro from '../../components/simple/buttonAtualizaCadastro';



export default function MenuEventos() {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: '#F8F5F5' }}>
      <View style={{ flex: 1, marginTop: Platform.OS == 'ios' ? 50 : 50 }}>
        <View style={styles.container}>
          <ButtonAtualizaCadastro />
          <Text style={styles.titulo}>EVENTOS</Text>
        </View>
        <View style={styles.containerimg}>
          <View style={styles.containerConteudo}>
            <Text style={styles.buttonTextStyle}>Festival de Outono</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Festival')}
              activeOpacity={0.5}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/eventos%2FFestival%20de%20outono.jpeg?alt=media&token=439ad050-8d01-455a-aecb-e861b209c60f',
                }}
                style={styles.img}
              />
              <Text style={styles.texImage}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerConteudo}>
            <Text style={styles.buttonTextStyle}>
              Festa de Senhora Sant’Ana de Serra Branca
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SerraBranca')}
              activeOpacity={0.5}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/eventos%2FSerra%20Branca.jpg?alt=media&token=1a5a504c-d778-41d4-83d9-bb2110d5683d',
                }}
                style={styles.img}
              />
              <Text style={styles.texImage}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerConteudo}>
            <Text style={styles.buttonTextStyle}>
            Festa do Divino Espírito Santo
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('DivinoEspiritoSanto')}
              activeOpacity={0.5}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/eventos%2FfestaDivinoEspiritoSanto.jpg?alt=media&token=6b8d3084-bcc7-4dc8-9c16-52e06139ea7a',
                }}
                style={styles.img}
              />
              <Text style={styles.texImage}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerConteudo}>
            <Text style={styles.buttonTextStyle}>
              MotoPort
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('MotoPort')}
              activeOpacity={0.5}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/eventos%2Fmotoport.jpg?alt=media&token=a301a514-b173-43cb-82a6-fb4bd2b9e8b5',
                }}
                style={styles.img}
              />
              <Text style={styles.texImage}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerConteudo}>
            <Text style={styles.buttonTextStyle}>
              Aniversário Porteirinha
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AniversarioPorteirinha')}
              activeOpacity={0.5}>
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/rotport-d7a39.appspot.com/o/eventos%2Fporteirinha-mg.jpg?alt=media&token=9d0f6a1b-993c-41f6-beda-122bd91a06d2',
                }}
                style={styles.img}
              />
              <Text style={styles.texImage}>Ver mais</Text>
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
    marginTop: 0
  },
  titulo: {
    color: '#007FFF',
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 12,
    marginTop: 0,
    marginBottom: 0,
  },
  containerimg: {
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 5,
  },
  containerConteudo: {
    marginTop: 25,
  },
  img: {
    marginTop: 0,
    height: 100,
    borderRadius: 5,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#E5E5E5',
    color: '#007FFF',
    width: 250,
  },
  texImage: {
    color: '#FFFFFF',
    flexDirection: 'column',
    textAlign: 'right',
    fontWeight: '300',
    marginHorizontal: 12,
    marginTop: -20,
    marginBottom: 0,
  },
});
