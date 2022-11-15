import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container01: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#141414',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#121212',
      height: '10%',
    },

    container02: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#3939',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '60%',
        width: '20%'
    },

    texth1: {
      color: '#eeeee4',
      fontSize: 30,
    },
    texth2: {
        color: '#eeeee4',
        fontSize: 25,
    },
    button: {
        backgroundColor: '#1e81b0',
        padding: 8,
        marginTop: 20,
        borderRadius: 5,
        color: '#eeeee4',
        justifyItem: 'center',
    }
})