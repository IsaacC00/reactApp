import { createStackNavigator } from '@react-navigation/stack'
import { SimplePokemon } from '../interfaces/Pokemon.interface';
import { HomeScreen } from '../screens/HomeScreen';
import { View } from 'react-native';


export type RootStackParams = {
    HomeScreen: undefined,
    PokemonScreen: { simplePokemon: SimplePokemon, color: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}>
            
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            {/* <Stack.Screen name='PokemonScreen' component={PokemonScreen}/> */}
        </Stack.Navigator>
    )
}