import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Text
} from 'react-native';
import Logo from '../../components/simple/logo';
import Input from '../../components/simple/Input/index';
import ButtonConfirma from '../../components/simple/buttonConfirma';
//import * as firebase from 'firebase';
//import { auth } from '../../config/firebase';
// import { useNavigation } from '@react-navigation/native';
// import { ReactNativeFirebase } from '@react-native-firebase/app';
import firebase from 'firebase/compat';


export default class AtualizaCadastro extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      newEmail: '',
    };
  }

  reauthenticate = (currentPassword: any) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  };

  onChangePasswordPress = () => {
    this.reauthenticate(this.state.currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(this.state.newPassword)
          .then(() => {
            Alert.alert('Senha alterada com sucesso!');
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangeEmailPress = () => {
    this.reauthenticate(this.state.currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updateEmail(this.state.newEmail)
          .then(() => {
            Alert.alert('E-mail foi alterado com sucesso!');
          })
          .catch((error: { message: any; }) => {
            console.log(error.message);
          });
      })
      .catch((error: { message: any; }) => {
        console.log(error.message);
      });
  };

  render(): React.ReactNode {
    return (
      <ScrollView style={{ backgroundColor: '#F8F5F5' }}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <StatusBar hidden />
          <Logo />
          <View style={styles.container}>
          <Text style={styles.Text}>Alterar apenas o E-mail</Text>
          <TextInput
              style={styles.textInput}
              value={this.state.newEmail}
              placeholder="Novo Email"
              autoCapitalize="none"
              onChangeText={(text) => {
                this.setState({ newEmail: text });
              }}
            />

            {/* <Button title="Alterar o e-mail" onPress={this.onChangeEmailPress} /> */}
            <TouchableOpacity
              onPress={this.onChangeEmailPress}
              style={styles.btnContainer}>
              <Text style={styles.btnText}>Alterar o e-mail</Text>
            </TouchableOpacity>
            <View style={styles.containerSection}></View>
            <Text style={styles.Text}>Alterar apenas a senha</Text>
            <TextInput
              style={styles.textInput}
              value={this.state.currentPassword}
              placeholder="Senha atual"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({ currentPassword: text });
              }}
            />
            <TextInput
              style={styles.textInput}
              value={this.state.newPassword}
              placeholder="Nova Senha"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({ newPassword: text });
              }}
            />
            {/* <Button title="Alterar senha" onPress={this.onChangePasswordPress} /> */}
            <TouchableOpacity
              onPress={this.onChangePasswordPress}
              style={styles.btnContainer}>
              <Text style={styles.btnText}>Alterar senha</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: Platform.OS === 'ios' ? 0 : 50,
  },
  Text: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#00AC5D',
    fontWeight: '600',
    fontSize: 20,
    fontfamily: 'Inter'
  },
  textInput: {
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
  containerSection: {
    marginTop: 50,
  },
  btnContainer: {
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    marginTop: 5,
    width: 160,
  },
  btnText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#007FFF',
    fontWeight: 'normal',
    fontSize: 18,
    fontfamily: 'Inter'
  },
});
