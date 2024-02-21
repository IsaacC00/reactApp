//comporbar git
import React from 'react';
import { FadeInImage } from './src/components/FadeInImage';
import { View } from 'react-native';
  
export default function App() {

  return (
    <View >
      <FadeInImage uri={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png'} 
      style={
        {
          width: 220,
          height: 220,
          alignSelf:'center' 
        }
      }/>

    </View>
  );
}
