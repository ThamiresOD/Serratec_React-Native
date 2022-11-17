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
  container02: {
    flexDirection: 'row',
    backgroundColor: '#3939',
    alignItems: 'center',
    height: '5%',
    width: '100%',
  },

  section03: {
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '15%',
  },

  section04: {
    flexDirection: 'row',
    backgroundColor: '#3939',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    width: '85%',
  },

  text03: {
    color: '#f9f9f9',
    fontSize: 15,
    borderRadius: 5,
    borderColor: '#141414',
  },

  /* *************************************** */

  //3/6 ->  Tocados Recentemente

  container03: {
    flexDirection: 'row',
    backgroundColor: '#3939',
    alignItems: 'center',
    height: '5%',
    width: '100%',
    borderTopWidth: 1,
    borderStartColor: '#000',
  },

  section05: {
    flexDirection: 'row',
    backgroundColor: '#391423',
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
    backgroundColor: '#141414',
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
    height: '50%',
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
  
  container05: {
    flexDirection: 'row',
    backgroundColor: '#444444',
    alignItems: 'center',
    height: '10%',
    width: '96%',
    flexWrap:  'wrap',
    marginStart: '2%',
    marginBottom: '6%',
    borderRadius: 15,
    zIndex: 2,
  },
  
  section09: {
    backgroundColor: '#444444',
    alignItems: 'center',
    justifyContent: 'start',
    height: '100%',
    width: '20%',
    padding: '3%',
  },

  section10: {
    backgroundColor: '#444444',
    alignItems: 'start',
    justifyContent: 'center',
    height: '100%',
    width: '50%',
    padding: '1%',
  },

  section11: {
    flexDirection: 'row',
    backgroundColor: '#444444',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    width: '30%',
    padding: '3%',
  },
  
  // section12: {
  //   backgroundColor: '#209347',
  //   width: '90%',
  //   padding: '3%',
  // },

 /* *************************************** */

  //6/6 -> Menu do app

  container06: {
    backgroundColor: 'translucid',
    alignItems: 'center',
    height: '10%',
    width: '100%',

  },
  
  section13: {
    flexDirection: 'row',
    backgroundColor: '#3939',
    alignItems: 'start',
    justifyContent: 'space-around',
    height: '50%',
    width: '100%',
    padding: '2%',
   
  },

  section14: {
    flexDirection: 'row',
    backgroundColor: '#3939',
    alignItems: 'start',
    justifyContent: 'space-around',
    height: '50%',
    width: '100%',
    padding: '2%',
  },

  text09: {
    color: '#f9f9f9',
    fontSize: 10,
    marginStart: '4%',
  },

  text10: {
    color: '#f9f9f9',
    fontSize: 10,
    marginStart: '8%',
  },

  text11: {
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