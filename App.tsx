//comporbar git
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

  //hook per o con useState
  const useConter = ()=>{
    const [counter,setCounter] = useState(0)
  
    const increase = () => setCounter(counter +1);
    const decrease = () => setCounter(counter -1);
    const reset = () => setCounter(0);
    
    return{
      counter,
      increase,
      decrease,
      reset
    }
  }
//hook per o con useState
  
export default function App() {
//tipos dar valores con lo que quiero trabajar
//permite trbajar con data primitiva con data nueva creada por el dev
//tipo fr datos esperados
type gender = "male" | "female" | "no-binario"

interface PersonInterface{
  name:string;
  lastName:string;
  email : string | null;
  age: number;
  gender: gender;
  isActive: boolean;

}
  //funcion para aumenta la edad de una persona                si no recive nada spor defecto le pasa 9
  const incrementeAgePerson = (person: PersonInterface, ageNumbre: number = 9) => {
    const newAge = person.age + ageNumbre; 
    //console.log(person.age);|
    
    const newPerson: PersonInterface = {
      age:newAge,
      name:person.name,
      lastName:person.lastName,
      email:person.email,
      gender:person.gender,
      isActive:person.isActive
      
    }
    return newPerson;
  }

  //cracion del objeto 
  let persona:PersonInterface = {
    name: "Isaac",
    lastNmae: "Calderon",
    email:null,
    age: 23,
    gender:"male",
    isActive: true,

  }
  
  //descomposicion de un objeto 
  const {name,lastName} = persona
  console.log(name,lastName);
  console.log(incrementeAgePerson(persona,1));
  
  const {counter,increase,decrease,reset} = useConter()

  //para impplementar dos contadores, serrai de la siguiente forma
  const conterOne = useConter();
  const conterTwo = useConter(); 

  return (
    <View style={styles.container}>
      <Text>primer counter</Text>

      <Text>{conterOne.counter}</Text>
      <Button onPress={conterOne.increase}
        title='+'
        
      />
      <Button onPress={conterOne.decrease}
        title='-'
      />
      <Button onPress={conterOne.reset}
        title='Reset'
      />
      
      <Text>segundo counter</Text>
      
      <Text>{conterTwo.counter}</Text>
      <Button onPress={conterTwo.increase}
        title='+'
        
      />
      <Button onPress={conterTwo.decrease}
        title='-'
      />
      <Button onPress={conterTwo.reset}
        title='Reset'
      />

      <Text
      //importar estilos
      style={styles.text}
      >Hola Mundo desde react</Text>

      <Button 
        onPress={ () =>{
          console.log("Ejecutando la funcion de persona ");
          console.log(incrementeAgePerson(persona,1));
        }}
        title="Presioname"
        color="#841584"
        
      />
    
    <TouchableOpacity onPress={
      ()=> console.log("Click en Imagen")
    }>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
        }}
      />
    </TouchableOpacity>
      
      <Text>{persona.name}</Text>
      <Text>{persona.lastName}</Text>
      <Text>{persona.age}</Text>
      <Text>{persona.gender ==="male" ? "masculino" : 
        persona.gender === "female" ? "femenino":
          "no binario"
      }</Text>
      <Text>{persona.email}</Text>

      <StatusBar style="auto" />
    </View>
  );
}
//hoja de estilos de javascript
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"100%",
      height:"100%",
      backgroundColor: '#A59F99',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize: 24,
      color: "#841584",
      marginBottom: 10
    },
    tinyLogo:{
      width:100,
      height:100,
      marginVertical: 20
    },
  });