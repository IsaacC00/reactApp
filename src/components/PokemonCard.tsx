import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { SimplePokemon } from "../interfaces/Pokemon.interface";
import { FadeInImage } from "./FadeInImage";
import ImageColor from 'react-native-image-colors';
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";


interface Props {
    pokemon: SimplePokemon
}

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

export const PokemonCard = ({ pokemon }: Props) => {
    const [bgColor, setbgColor] = useState('gray');
    const isMounted =  useRef(true);
    const navigation = useNavigation();


    useEffect(() => {
        ImageColor.getColors(pokemon.picture, {fallback: "gray"})
        .then( colors=>{
            if(!isMounted.current) return;
            (colors.platform === "android") && setbgColor(colors.dominant || "gray");
            (colors.platform === "ios") && setbgColor(colors.background || "gray");   
        }   
        )
      return () => {
        
      }
    }, [])

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { }} >
            <View
                style={{...styles.cardContainer, width: windowWidth * 0.4,
                backgroundColor: bgColor
                }}>
                    {/* contenedor del texto */}
                <View style={{backgroundColor: 'blue'}}>
                    <Text>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View style={styles.pokeContainer} >
                    <Image
                        style={styles.pokebola}
                        source={require('../assets/pokebola-blanca.png')} />
                </View>
                <FadeInImage
                     style={styles.pokemonImage}
                    uri={pokemon.picture}
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 120,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset:{
            width:0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name:{
        color: "#ffff",
        fontSize: 20,
        fontWeight: "bold",
        top: 20,
        left:10,
    },
    pokebola:{
        width: 100,
        height: 100,
        position: "absolute",
        right: -25,
        bottom: -25
    },
    pokeContainer:{
        width: 100,
        height: 120,
        position: "absolute",
        right: 0,
        bottom: 0,
        overflow: "hidden",
        opacity: 0.5
    },
    pokemonImage:{
        width: 100,
        height: 120,
        position: "absolute",
        right: -8,
        bottom: -5  
    }
})