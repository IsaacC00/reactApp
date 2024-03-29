import { StackScreenProps } from "@react-navigation/stack"
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootStackParams } from "../navigator/Navigator"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from "../components/FadeInImage";
import { usePokemon } from "../hooks/usePokemon";
import { PokemonDetail } from "../components/PokemonDetail";
import { PokeballLoading } from "../components/PokeballLoading";

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };
export const PokemonScreen = ({ navigation, route }: Props) => {
  const { simplePokemon, color } = route.params;
  const { top } = useSafeAreaInsets();
  const {id, name, picture} = simplePokemon;
  const {isLoading, pokemon} = usePokemon(id);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>
        <TouchableOpacity
          onPress={() => { navigation.pop()}}
          activeOpacity={0.8}
          style={{ ...styles.backButton, top: top + 5 }}>
          <Icon name="arrow-back-outline" color={'white'} size={35} />
        </TouchableOpacity>
      <Text style={{  ...styles.pokemonName, top: top + 40 }}>
        {name + '\n'}# {id}
        </Text>
        <Image source={require('../assets/pokebola-blanca.png')} 
        style={styles.pokeball}
        />
        <FadeInImage uri={picture} style={styles.pokemonImage}/>
      </View>
      {
        isLoading
        ?
        <View style={styles.loadingIndicator}>
          {/* <ActivityIndicator color={color} size={50}/> */}
          <PokeballLoading/>
        </View>
        :
        <PokemonDetail pokemon={pokemon}/>
      }
    </View>
  )
}
const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: '#000000',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})