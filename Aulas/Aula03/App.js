// import { setStatusBarTranslucent, StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { Text, View, Button, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
// import { Gatinho } from './src/components/Gatinho';
// import { styles } from './styles';
// import foto01 from './src/assets/foto01.jpg';
// import foto02 from './src/assets/foto02.jpg';

// export default function App() {
//   const [nome, setNome] = useState("")
//   const [isTrue, setIsTrue] = useState(false)

//   const handlePress = () => {
//     // alert("Pressionei")
//     setIsTrue(!isTrue)
//   }

//   return (
//     <View style={styles.container}>
//        <ScrollView style={styles.scrollcontainer}>
//         <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
//           style={{width: 50, height: 50}}
//         />
//         <Image source={ require('./src/assets/foto01.jpg')} style={{ width: 50, height: 50}}/>
//         <Image source={ isTrue } style={{ width: 50, height: 50}}/>

//         <Text style={styles.texth1}>Hello World!</Text>
//         <Gatinho nome="Peixe"/>
//         <Text style={styles.texth2}>Input: {nome}</Text>
//         <Text style={styles.texth2}>{ isTrue ? "Verdadeiro!" : "Falso"}</Text>
//         <TextInput
//           style={{backgroundColor: '#fff', marginBottom: 20, width: '80%'}}
//           placeholder='Digite o nome do gatinho: '
//           onChangeText={setNome}
//           value={nome} 
//         // keyboardType='' 
//         />
//         <Button onPress={() => {handlePress()}} title='click here!' color='#1e81b0'/>
//         <TouchableOpacity ><Text style={styles.button}>TouchableOpacity</Text></TouchableOpacity>
//         <StatusBar style="auto"/>
//       </ScrollView>
//     </View>
//   );
// }

import { styles } from "./styles"
import { StyleSheet, Text, View } from "react-native"

//Exemplo Aula
// const Flexbox = () => {

//   return (
//     <>
//       <View style={styles.container01}>
//         <Text style={styles.texth1}>FLEXBOX</Text>
//       </View>

//       <View style={styles.superior}></View>
//       <View style={styles.centro}></View>
//       <View style={styles.inferior}></View>
//     </>
//   )
// }
// export default Flexbox


// Atividade 01
const Flexbox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}></View>
      </View>
    </>
  )
}
export default Flexbox
