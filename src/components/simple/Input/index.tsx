import { StyleSheet, TextInput } from 'react-native';

export default function Input() {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Email" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha" />
    </>
  );
}

const styles = StyleSheet.create({
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
  }
});