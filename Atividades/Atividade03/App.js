import { ScrollView, Text, View, Buttom, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import Ionicons from '@expo/vector-icons/Ionicons';
import imgPerfil from './images/Perfil.jpg';
import imgParaponeraClavata from './images/ParaponeraClavata.jpg';
import imgSoYoung from './images/SoYoung.jpg';

export default function App() {
  return (
    <>
      <View style={styles.faixa01}></View>

      {/* 1/6 -> Titulo-Menu */}
      <View style={styles.container01}>
        {/* Perfil e título da página */}
        <View style={styles.section01}>
          <Image source={imgPerfil} style={{ width: 50, height: 50, marginBottom: '0%' }} />
          <Text style={styles.text02}>Sua Biblioteca</Text>
        </View>

        {/* Icones de pesquisa e mais opções */}
        <View style={styles.section02}>
          <Ionicons name="search" size={28} color="white" />
          <Ionicons name="add-outline" size={32} color="white" />
        </View>
      </View>

      {/* 2/6 -> Filtro */}
      <View style={styles.containerFiltro}>
        <View style={styles.sectionFiltro}>
          <TouchableOpacity style={styles.buttom03}>
            <Text style={styles.textExit}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttom04}>
            <Text style={styles.text03}>Playlists</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttom05}>
            <Text style={styles.text03}>Criadas por você</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttom06}>
            <Text style={styles.text03}>Indicadas pelo Spo</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 3/6 ->  Tocados Recentemente */}
      <View style={styles.containerRecentes}>
        <View style={styles.section05}>
          <Ionicons name="swap-vertical" size={15} color="white" />
          <Text style={styles.text06}>Tocados Recentemente</Text>
        </View>
        <View style={styles.section06}>
          <Ionicons name="grid-outline" size={15} color="white" />
        </View>
      </View>


      {/* 4/6 -> Playlists */}

      {/* //arrow-down-circle-sharp icon */}


      <View style={styles.containerFlex}>
        <View style={styles.container04}>

          {/* Imagem do álbum */}
          <View style={styles.section07}>
            <Text>Imagem do álbum x1</Text>
          </View>

          {/* Nome da Playlist e do criador */}
          <View style={styles.section08}>
            <Text style={styles.text07}>Nome da Playlist</Text>
            <Text style={styles.text08}>Nome do criador</Text>
          </View>
        </View>
      </View>


      {/* 5/6 -> Play (So Young) */}
      <View style={styles.containerPlay}>
          <View style={styles.sectionMusicImg}>
            <Image source={imgSoYoung} style={{ width: 40, height: 40, marginBottom: '0%' }} />
          </View>

          {/* Nome da música e nome da(o) artista/banda */}
          <View style={styles.sectionMusicPlay}>
            <Text style={styles.textMusicName}>So Young</Text>
            <Text style={styles.textBandName}>Portugal, The an</Text>
          </View>


          {/* ícones de dispositivos, like e play/pause */}
          <View style={styles.sectionIconPlay}>
            <Ionicons name="desktop-outline" size={23} color="white" style={styles.iconPlay}/>
            <Ionicons name="heart" size={25} color="#209347" style={styles.iconPlay}/>
            <Ionicons name="pause" size={25} color="white" style={styles.iconPlay}/>
          </View>

          {/* Barra de tempo da música já reproduzida */}
          {/* <View style={styles.section12}></View> */}
      </View>


      {/* 6/6 -> Menu do app*/}
      <View style={styles.containerMenu}>
        <View style={styles.sectionIconMenu}>
          <Ionicons name="md-home-outline" size={28} color="white" />
          <Ionicons name="search" size={28} color="white" />
          <Ionicons name="library-outline" size={28} color="white" />
        </View>
        <View style={styles.sectionIconTitle}>
          <Text style={styles.textIconMenu01}>Inicio</Text>
          <Text style={styles.textIconMenu02}>Buscar</Text>
          <Text style={styles.textIconMenu03}>Sua Biblioteca</Text>
        </View>
      </View>

      <View style={styles.faixa02}>
        <View style={styles.faixa03}></View>
      </View>
    </>
  );
}


