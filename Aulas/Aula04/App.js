// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { styles } from './style';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("React Native");
  const [nomeInput, setNomeInput] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text01}>{nome}</Text>
      <TextInput
        placeholder='Digite aqui seu nome'
        onChangeText={setNomeInput}
        value={nomeInput}
      />
      <TouchableOpacity
        style={styles.buttom}
        onPress={() => setNome(nomeInput)}>
        <Text style={styles.text01}>Clique Aqui!</Text>
      </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

