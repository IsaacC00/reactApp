import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/Pokemon.interface';
import { FadeInImage } from './FadeInImage';
interface Props{
    pokemon: PokemonFull
}
export const PokemonDetail = ({pokemon}:Props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}>
                <View style={{...styles.container, marginTop: 370}}>
                    <Text style={styles.title}>Tipo dePokemon:</Text>
                    <View style={{flexDirection: 'row'}}>
                        {
                            pokemon.types.map(({type})=>(
                                <Text key={type.name}
                                 style={{...styles.regularText, marginRight: 10}} >
                                    {type.name}
                                </Text>
                            ))
                        }
                    </View>
                </View>


                <View style={{marginLeft:10}}>
                        <Text style={styles.title}>Peso:</Text>
                        <Text style={styles.regularText}>{pokemon.weight}:</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Sprites:</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprites} />
                        <FadeInImage uri={pokemon.sprites.back_default} style={styles.basicSprites}/>
                        <FadeInImage uri={pokemon.sprites.front_shiny} style={styles.basicSprites}/>
                        <FadeInImage uri={pokemon.sprites.back_shiny} style={styles.basicSprites}/>
                        <FadeInImage uri={pokemon.sprites.front_female} style={styles.basicSprites}/>
                </ScrollView>

                  <View style={styles.container}>
                        <Text style={styles.title}>Habilidades Basicas:</Text>
                        <View style={{flexDirection: "row"}}>
                            {
                                pokemon.abilities.map(({ability})=>(
                                    <Text
                                    key={ability.name}
                                    style={{...styles.regularText, marginRight:10}}>
                                        {ability.name+"\n"}
                                    </Text>
                                ))
                            }
                        </View>
                    </View>      
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 10,
    },
    basicSprites: {
        width: 100,
        height: 100,
    }
})