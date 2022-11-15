import { Text, View } from 'react-native';
import { styles } from './style';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <>
      <View style={styles.container01}>
        <Text style={styles.texth1}>👻</Text>
        <Text style={styles.texth1}>Sua Biblioteca</Text>
        <View style={styles.container02}>
          <Ionicons name="search" size={32} color="white" />
          <Ionicons name="add-outline" size={40} color="white" />
        </View>
      </View>
      
      <View style={styles.container02}>


      </View>

      <View style={styles.container}>
        <Text style={styles.texth1}>Buuuh 👻</Text>
      </View>
    </>
  );
}


