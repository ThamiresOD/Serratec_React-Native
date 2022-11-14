import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Styles } from './Styles';

export default function App() {
  return (
    <>
      <View style={Styles.barra01}></View>
      <View style={Styles.barra02}></View>

      <View style={Styles.container01}>
        <View style={Styles.quadrado01}></View>
        <View style={Styles.retangulo01}></View>
      </View>

      <View style={Styles.container02}>
        <View style={Styles.retangulo02}></View>
        <View style={Styles.retangulo03}></View>
        <View style={Styles.barra02}></View>
      </View>

      <View style={Styles.container03}>
        <View style={Styles.quadrado02}></View>
        <View style={Styles.quadrado02}></View>
        <View style={Styles.quadrado02}></View>
        <View style={Styles.quadrado02}></View>
        <View style={Styles.quadrado02}></View>
        <View style={Styles.quadrado02}></View>
      </View>

      <View style={Styles.barra03}></View>
      <View style={Styles.barra01}></View>
    </>
  );
}


