import { StyleSheet, Text, View } from 'react-native';

export const Styles = StyleSheet.create({

  barra01: {
    backgroundColor: '#000000', //preto
    width: '100%',
    height: '5%',
  },


  barra02: {
    backgroundColor: '#4fe3c1', //verde
    width: '100%',
    height: 15,
  },


  container01: {
    height: '30%',
    alignItems: 'center',
  },

  quadrado01: {
    marginTop: '8%',
    backgroundColor: '#f8a82b', //amarelo
    width: '25%',
    height: '40%',
  },
  
  retangulo01: {
    marginTop: '5%',
    backgroundColor: '#f8a82b', //amarelo
    width: '40%',
    height: '10%',
  },


  container02: {
    height: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },

  retangulo02: {
    backgroundColor: '#a900fd', //roxo
    width: '50%',
    height: '100%',
  },

  retangulo03: {
    backgroundColor: '#5485e1', //azul01
    width: '50%',
    height: '100%',
    alignSelf: 'flex-end',
  },


  container03: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignContent: 'space-around',
    flexWrap: 'wrap',
    paddingTop: '10%',
  },
  
  quadrado02: {
    marginTop: '10%',
    backgroundColor: '#f8a82b', //amarelo
    width: '26%',
    height: '25%',
  },


  barra03: {
    backgroundColor: '#5485e1', //azul02
    width: '100%',
    height: '7%',
  },


})