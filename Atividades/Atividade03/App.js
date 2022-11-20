import { ScrollView, Text, View, Buttom, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import Ionicons from '@expo/vector-icons/Ionicons';
import imgPerfil from './images/Perfil.jpg';
import imgCurtidas from './images/Curtidas.jpg';
import imgParaponeraClavata from './images/ParaponeraClavata.jpg';
import imgMyrmecia from './images/Myrmecia.jpg';
import imgLinepithemaHumile from './images/LinepithemaHumile.jpg';
import imgGabrielaThamires from './images/GabrielaThamires.jpg';
import imgRomuloThamires from './images/RomuloThamires.jpg';
import imgCassiaEller from './images/CassiaEller.jpg';
import imgLeX from './images/LeX.jpg';

import imgSoYoung from './images/SoYoung.jpg';

export default function App() {
  return (
    <>
      <View style={styles.faixa01}></View>

      {/* 1/6 -> Titulo-Menu */}
      <View style={styles.containerPerfil}>
        {/* Perfil e título da página */}
        <View style={styles.sectionPerfil}>
          <Image source={imgPerfil} style={{ width: 50, height: 50, marginBottom: '0%' }} />
          <Text style={styles.textBiblioteca}>Sua Biblioteca</Text>
        </View>

        {/* Icones de pesquisa e mais opções */}
        <View style={styles.sectionSearch}>
          <Ionicons name="search" size={28} color="white" />
          <Ionicons name="add-outline" size={32} color="white" />
        </View>
      </View>

      {/* 2/6 -> Filtro */}
      <View style={styles.containerFiltro}>
        <View style={styles.sectionFiltro}>
          <TouchableOpacity style={styles.buttomX}>
            <Text style={styles.textExit}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttomPlaylist}>
            <Text style={styles.textFiltro}>Playlists</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttomCriadas}>
            <Text style={styles.textFiltro}>Criadas por você</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttomIndicadas}>
            <Text style={styles.textFiltro}>Indicadas pelo Spo</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 3/6 ->  Tocados Recentemente */}
      <View style={styles.containerRecentes}>
        <View style={styles.sectionRecentes}>
          <Ionicons name="swap-vertical" size={15} color="white" />
          <Text style={styles.textRecentes}>Tocados Recentemente</Text>
        </View>
        <View style={styles.sectionGrid}>
          <Ionicons name="grid-outline" size={15} color="white" />
        </View>
      </View>


      {/* 4/6 -> Playlists */}

      <View style={styles.containerPlaylists}>
        <View style={styles.containerPlaylist}>
          {/* Imagem do álbum 01 */}
          <View style={styles.sectionPlaylistImg}>
            <Image source={imgCurtidas} style={{ width: 70, height: 70, marginBottom: '0%' }} />
          </View>

          {/* Nome da Playlist e do criador 01 */}
          <View style={styles.sectionPlaylistName}>
            <Text style={styles.textPlaylistName}>Músicas Curtidas</Text>
            <Text style={styles.textCreatorName}>📌463 músicas</Text>
          </View>

          {/* Imagem do álbum 02 */}
          <View style={styles.sectionPlaylistImg}>
            <Image source={imgParaponeraClavata} style={{ width: 70, height: 70, marginBottom: '0%' }} />
          </View>

          {/* Nome da Playlist e do criador 02 */}
          <View style={styles.sectionPlaylistName}>
            <Text style={styles.textPlaylistNameSelected}>Paraponera Clavata</Text>
            <Text style={styles.textCreatorName}>📌⬇️Thamires Ouverney</Text>
          </View>

          {/* Imagem do álbum 03 */}
          <View style={styles.sectionPlaylistImg}>
            <Image source={imgMyrmecia} style={{ width: 70, height: 70, marginBottom: '0%' }} />
          </View>

          {/* Nome da Playlist e do criador 03 */}
          <View style={styles.sectionPlaylistName}>
            <Text style={styles.textPlaylistName}>Myrmecia</Text>
            <Text style={styles.textCreatorName}>Thamires Ouverney</Text>
          </View>

          {/* Imagem do álbum 04 */}
          <View style={styles.sectionPlaylistImg}>
            <Image source={imgLinepithemaHumile} style={{ width: 70, height: 70, marginBottom: '0%' }} />
          </View>

          {/* Nome da Playlist e do criador 04 */}
          <View style={styles.sectionPlaylistName}>
            <Text style={styles.textPlaylistName}>Linepithema Humile</Text>
            <Text style={styles.textCreatorName}>Thamires Ouverney</Text>
          </View>

          {/* Imagem do álbum 05 */}
          {/* <View style={styles.sectionPlaylistImg}>
            <Image source={imgGabrielaThamires} style={{ width: 70, height: 70, marginBottom: '0%' }} />
          </View> */}

          {/* Nome da Playlist e do criador 05 */}
          {/* <View style={styles.sectionPlaylistName}>
            <Text style={styles.textPlaylistName}>Gabriela + Thamires</Text>
            <Text style={styles.textCreatorName}>Spotify</Text>
          </View> */}

          {/* Imagem do álbum 06 */}
          {/* <View style={styles.sectionPlaylistImg}>
            <Image source={imgRomuloThamires} style={{ width: 70, height: 70, marginBottom: '0%' }} />
          </View> */}

          {/* Nome da Playlist e do criador 06 */}
          {/* <View style={styles.sectionPlaylistName}>
            <Text style={styles.textPlaylistName}>Romulo + Thamires</Text>
            <Text style={styles.textCreatorName}>Spotify</Text>
          </View> */}

          {/* Imagem do álbum 07 */}
          {/* <View style={styles.sectionPlaylistImg}>
            <Image source={imgLeX} style={{ width: 70, height: 70, marginBottom: '0%' }} />
          </View> */}

          {/* Nome da Playlist e do criador 07 */}
          {/* <View style={styles.sectionPlaylistName}>
            <Text style={styles.textPlaylistName}>L & X</Text>
            <Text style={styles.textCreatorName}></Text>
          </View> */}
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
          <Text style={styles.textBandName}>Portugal, The Man</Text>
        </View>


        {/* ícones de dispositivos, like e play/pause */}
        <View style={styles.sectionIconPlay}>
          <Ionicons name="desktop-outline" size={23} color="white" style={styles.iconPlay} />
          <Ionicons name="heart" size={25} color="#209347" style={styles.iconPlay} />
          <Ionicons name="pause" size={25} color="white" style={styles.iconPlay} />
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


