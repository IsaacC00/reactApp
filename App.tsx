//comporbar git
import React from 'react';
import { FadeInImage } from './src/components/FadeInImage';
import { View } from 'react-native';
  
export default function App() {

  return (
    <View >
      <FadeInImage uri={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'} 
      style={
        {
          width: 100,
          height: 100,
          
          alignSelf:'center' 
        }
      }/>

    </View>
  );
}
