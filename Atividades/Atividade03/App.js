import { ScrollView, Text, View } from 'react-native';
import { styles } from './style';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <>

      <View style={styles.faixa01}></View>

      {/* 1/6 -> Titulo-Menu */}
      <View style={styles.container01}>

        {/* Perfil e título da página */}
        <View style={styles.section01}>
          <Text style={styles.text01}>👻</Text>
          <Text style={styles.text02}>Sua Biblioteca</Text>
        </View>

        {/* Icones de pesquisa e mais opções */}
        <View style={styles.section02}>
          <Ionicons name="search" size={28} color="white" />
          <Ionicons name="add-outline" size={32} color="white" />
        </View>
      </View>

      {/* 2/6 -> Filtro */}
      <View style={styles.container02}>
        <View style={styles.section03}>
          <Ionicons name="ios-close-circle-outline" size={28} color="white" />
        </View>
        <View style={styles.section04}>
          <Text style={styles.text03}>Playlists</Text>
          <Text style={styles.text03}>Criadas Por Você</Text>
          <Text style={styles.text03}>Indicadas pelo Spo</Text>
        </View>
      </View>

      {/* 3/6 ->  Tocados Recentemente */}
      <View style={styles.container03}>
        <View style={styles.section05}>
          <Ionicons name="ios-close-circle-outline" size={28} color="white" />
          <Text style={styles.text06}>Tocados Recentemente</Text>
        </View>
        <View style={styles.section06}>
          <Ionicons name="ios-close-circle-outline" size={28} color="white" />
        </View>
      </View>


      {/* 4/6 -> Playlists */}
      <View style={styles.containerFlex}>
        <View style={styles.container04}>

          {/* Imagem do álbum */}
          <View style={styles.section07}>
            <Text>Imagem do álbum x1</Text>
          </View>

          {/* Nome da Playlist e do criador */}
          <View style={styles.section08}>
            <Text style={styles.text07}>Nome da Playlists</Text>
            <Text style={styles.text08}>Nome do criador</Text>
          </View>
        </View>
      </View>


      {/* 5/6 -> Play (So Young) */}
      <View style={styles.container05}>
        <View style={styles.section09}>
          <Text>Imagem da música</Text>
        </View>


        {/* Nome da música e nome da(o) artista/banda */}
        <View>
          <View style={styles.section10}>
            <Text>So Young</Text>
            <Text style={styles.text08}>Nome do(a) artista</Text>
          </View>
        </View>

        {/* ícones de dispositivos, like e play/pause */}
        <View style={styles.section11}>
          <Ionicons name="ios-close-circle-outline" size={28} color="white" />
          <Ionicons name="ios-close-circle-outline" size={28} color="white" />
          <Ionicons name="ios-close-circle-outline" size={28} color="white" />
        </View>

        {/* Barra de tempo da música já reproduzida */}
        <View>Barra tempo da música</View> //wrap
      </View>


      {/* 6/6 -> Menu do app*/}
      <View style={styles.container06}>
        <View style={styles.section12}>
          <Ionicons name="ios-close-circle-outline" size={28} color="white" />
          <Ionicons name="ios-close-circle-outline" size={28} color="white" />
          <Ionicons name="ios-close-circle-outline" size={28} color="white" />
        </View>
        <View style={styles.section13}>
          <Text style={styles.text09}>Inicio</Text>
          <Text style={styles.text09}>Buscar</Text>
          <Text style={styles.text09}>Sua Biblioteca</Text>
        </View>
      </View>

    </>
  );
}


