import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Gatinho } from './src/components/Gatinho';
import { styles } from './styles';

export default function App() {

  const handlePress = () => {
    alert("Pressionei")
  }

  return (
    <View style={styles.container}>
       <ScrollView style={styles.scrollcontainer}>
        <Text style={styles.texth1}>Hello World!</Text>
        <Gatinho nome="Peixe"/>
        <Button onPress={() => {handlePress()}} title='click here!' color='#1e81b0'/>
        <TouchableOpacity onPress={handlePress}><Text style={styles.button}>TouchableOpacity</Text></TouchableOpacity>
        <StatusBar style="auto"/>
      </ScrollView>
    </View>
  );
}

