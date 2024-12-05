import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import Logo from '../../components/simple/logo';
//import Input from '../../components/simple/Input/index';
//import ButtonCadastrar from '../../components/simple/buttonCadastro';
import { auth } from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Cadastro() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorcadastro, setErrorcadastro] = useState('');

  const cadastroFirebase = () => {
    auth
      .createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate('Menu', { idUser: user.uid });
      })
      .catch((error) => {
        setErrorcadastro(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  return (
    <ScrollView style={{ backgroundColor: '#F8F5F5' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <StatusBar hidden />
        <Logo />
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          {errorcadastro === true ? (
            <View style={styles.contentAlert}>
              <MaterialCommunityIcons
                name="alert-circle"
                size={24}
                color="#FF0000"
              />
              <Text style={styles.warningAlert}>
                Email ou senha invalidos ou já cadastrado!
              </Text>
            </View>
          ) : (
            <View />
          )}
          {email === '' || senha === '' ? (
            <TouchableOpacity disabled={true} style={styles.btnContainer}>
              <Text style={styles.btnText}>Cadastrar</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ marginTop: 40 }}>
              <TouchableOpacity
                onPress={cadastroFirebase}
                style={styles.btnContainer}>
                <Text style={styles.btnText}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          )}
          {/* <View style={styles.btnContainer}>
            <ButtonCadastrar />
          </View> */}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: Platform.OS === 'ios' ? 0 : 50,
  },
  input: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    padding: 10,
    width: '90%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    color: '#000000',
  },
  contentAlert: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  warningAlert: {
    color: '#0AA1DD',
    fontSize: 16,
    paddingLeft: 10,
  },
  btnContainer: {
    alignItems: 'center',
    height: 50,
    backgroundColor: '#007FFF',
    borderRadius: 50,
    justifyContent: 'center',
    marginTop: 50,
    width: 250,
  },
  btnText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#F8F5F5',
    fontWeight: 'normal',
    fontSize: 20,
    fontfamily: 'Inter'
  },
});
