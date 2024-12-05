import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
// import ButtonEventosBar from '../../components/menuBar/buttonEventos';
// import ButtonPontosBar from '../../components/menuBar/ButtonPontos';
// import ButtonRotasBar from '../../components/menuBar/ButtonRotas';
// import ButtonVoltarBar from '../../components/menuBar/buttonVoltar';
import ButtonAtualizaCadastro from '../../components/simple/buttonAtualizaCadastro';
import ButtonEventos from '../../components/simple/buttonEventos';
import ButtonPontos from '../../components/simple/ButtonPontos';
import ButtonRotas from '../../components/simple/ButtonRotas';
//import Logout from '../../components/simple/Logoth';


export default function Menu() {
  return (
    <ScrollView style={{ backgroundColor: '#F8F5F5' }}>
      <View style={{ flex: 1, marginTop: Platform.OS == 'ios' ? 50 : 50 }}>
        <View style={styles.container}>
          <ButtonAtualizaCadastro />
          <Text style={styles.titulo}>PORTEIRINHA NA PALMA DA MÃO</Text>
        </View>
        <Text style={styles.subtitulo}>O que você procura?</Text>
        <View style={styles.containerimg}>
          <View style={styles.containerConteudo}>
            <ButtonPontos />
          </View>
          <View style={styles.containerConteudo}>
            <ButtonEventos />
          </View>
          <View style={styles.containerConteudo}>
            <ButtonRotas />
          </View>
        </View>
      </View>
      {/* <View style={styles.containerBar}>
        <ButtonVoltarBar />
        <ButtonEventosBar />
        <ButtonPontosBar />
        <ButtonRotasBar />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: 62,
    justifyContent: 'space-around',
  },
  titulo: {
    color: '#007FFF',
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 66,
    marginTop: 0,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 5,
  },
  containerimg: {
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 14,
  },
  containerConteudo: {
    marginTop: 20,
  },
  img: {
    marginTop: 5,
    height: 100,
    borderRadius: 5,
  },
  // containerBar: {
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   height: 62,
  //   justifyContent: 'space-around',
  //   marginTop: 190,
  // },
});