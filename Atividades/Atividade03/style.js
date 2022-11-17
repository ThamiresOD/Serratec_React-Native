import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({

  faixa01: {
    backgroundColor: '#0b0b0b',
    height: 32,
  },

  // 1/6 -> Titulo-Menu 
  container01: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    height: '10%',
    width: '100%',
  },

  section01: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'end',
    height: '100%',
    width: '70%',
    padding: '3%',
  },

  text01: {
    color: '#ffffff',
    fontSize: 25,
    margin: '2%',
  },

  text02: {
    color: '#ffffff',
    fontSize: 25,
    margin: '1%',
    marginStart: '1%',
  },

  section02: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'end',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '30%',
    paddingBottom: '3%',
    paddingStart: '5%',

  },

  /* *************************************** */

  //2/6 -> Filtro 


  // Borda botão 209347
  // Botao 15833b 'pressionado'
  // Borda botao 696969 não pressionado
  containerFiltro: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'center',
    height: '6%',
    width: '100%',
  },

  //Botão do fitro -> 'Playlist'
  sectionFiltro: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    width: '100%',
    paddingBottom: '2%',
  },

  buttom03: {
    backgroundColor: '#121212',
    borderWidth: 2,
    borderColor: '#626262',
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingTop: '1%',
    paddingBottom: '2%',
    borderRadius: 50,
  },

  buttom04: {
    backgroundColor: '#15833b',
    borderWidth: 2,
    borderColor: '#209347',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    borderRadius: 50,
  },

  buttom05: {
    backgroundColor: '#121212',
    borderWidth: 2,
    borderColor: '#626262',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    borderRadius: 50,
  },

  buttom06: {
    backgroundColor: '#121212',
    borderWidth: 2,
    borderColor: '#626262',
    borderEndColor: '#121212',
    paddingLeft: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    borderBottomStartRadius: 50,
    borderTopStartRadius: 50,
  },

  text03: {
    color: '#f9f9f9',
    fontSize: 12,
    borderRadius: 5,
    borderColor: '#141414',
  },

  textExit: {
    color: '#f9f9f9',
    fontSize: 12,
    borderRadius: 5,
    borderColor: '#141414',
  },

  /* *************************************** */

  //3/6 ->  Tocados Recentemente

  containerRecentes: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'center',
    height: '5%',
    width: '100%',
    borderTopWidth: 1,
    borderStartColor: '#000',
  },

  section05: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'start',
    height: '100%',
    width: '70%',
    padding: '3%',
  },

  text06: {
    color: '#f9f9f9',
    fontSize: 12,
    margin: '4%',
  },

  section06: {
    backgroundColor: '#121212',
    alignItems: 'end',
    justifyContent: 'center',
    height: '100%',
    width: '30%',
    padding: '4%',
  },

  /* *************************************** */

  //4/6 -> Playlists

  containerFlex: {
    flexDirection: 'row',
    backgroundColor: '#393945',
    alignItems: 'center',
    height: '57%',
    width: '100%',
    zIndex: 1,
  },

  container04: {
    flexDirection: 'row',
    backgroundColor: '#393945',
    alignItems: 'center',
    height: '10%',
    width: '100%',
  },

  section07: {
    flexDirection: 'row',
    backgroundColor: '#393945',
    alignItems: 'center',
    justifyContent: 'start',
    height: '100%',
    width: '25%',
    padding: '3%',
  },

  section08: {
    backgroundColor: '#3939',
    alignItems: 'start',
    justifyContent: 'center',
    height: '100%',
    width: '75%',
    padding: '1%',
  },

  text07: {
    color: '#f9f9f9',
    fontSize: 12,
  },

  text08: {
    color: '#f9f9f9',
    fontSize: 10,
  },

  /* *************************************** */

  //5/6 -> Play (So Young) 
  // cor da faixa da musica 444444

  containerPlay: {
    flexDirection: 'row',
    backgroundColor: '#444444',
    height: '6%',
    width: '96%',
    marginStart: '2%',
    borderRadius: 8,
    zIndex: 2,
  },

  sectionMusicImg: {
    marginStart: '3%',
    backgroundColor: '#444444',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '10%',
  },

  sectionMusicPlay: {
    backgroundColor: '#444444',
    justifyContent: 'center',
    marginStart: '3%',
    width: '50%',
  },
  
  sectionIconPlay: {
    flexDirection: 'row',
    backgroundColor: '#444444',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginStart: '3%',
    height: '100%',
    width: '30%',
    padding: '3%',
  },

  iconPlay: {
    padding: '10%'
  },

  textMusicName: {
    color: '#f9f9f9',
    fontSize: 15,
  },

  textBandName: {
    color: '#c4c4c4',
    fontSize: 15,
  },

  // section12: {
  //   backgroundColor: '#209347',
  //   width: '90%',
  //   padding: '3%',
  // },

  /* *************************************** */

  //6/6 -> Menu do app

  containerMenu: {
    backgroundColor: 'translucid',
    alignItems: 'center',
    height: '10%',
    width: '100%',
    zIndex: 2,
  },

  sectionIconMenu: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'start',
    justifyContent: 'space-around',
    height: '50%',
    width: '100%',
    padding: '2%',

  },

  sectionIconTitle: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'start',
    justifyContent: 'space-around',
    height: '50%',
    width: '100%',
    padding: '2%',
  },

  textIconMenu01: {
    color: '#f9f9f9',
    fontSize: 10,
    marginStart: '4%',
  },

  textIconMenu02: {
    color: '#f9f9f9',
    fontSize: 10,
    marginStart: '8%',
  },

  textIconMenu03: {
    color: '#f9f9f9',
    fontSize: 10,
    marginStart: '3%',
  },

  faixa02: {
    backgroundColor: '#444d52',
    height: '3%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  faixa03: {
    backgroundColor: '#ffffff',
    height: '20%',
    width: '30%',
    borderRadius: 15,
  },
})