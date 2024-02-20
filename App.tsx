//comporbar git
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

//tipos dar valores con lo que quiero trabajar
//permite trbajar con data primitiva con data nueva creada por el dev
//tipo fr datos esperados
type gender = "male" | "female" | "no-binario"

interface PersonInterface{
  name:string;
  lastNmae:string; 
  email : string | null;
  age: number;
  gender: gender;
  isActive: boolean;

}

//source
/**
 * @description componente funcional
 * @returns 
 */

const App = () => {

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);


  const objeto ={
    "propiedad1":"a",
    "propiedad2":2,
    
  };

  const { propiedad1, propiedad2 }=objeto;

  const [first, setfirst] = useState();
 
  //cracion del objeto 
  let persona:PersonInterface = {
    name: "Isaac",
    lastNmae: "Calderon",
    email:null,
    age: 23,
    gender:"male",
    isActive: true,

  }

  //funcion para aumenta la edad de una persona                si no recive nada spor defecto le pasa 9
  const incrementeAgePerson = (person: PersonInterface, ageNumbre: number = 9) => {
    const newAge = person.age + ageNumbre; 
    //console.log(person.age);|
    
    const newPerson: PersonInterface = {
      age:newAge,
      name:person.name,
      lastNmae:person.lastNmae,
      email:person.email,
      gender:person.gender,
      isActive:person.isActive
      
    }
    return newPerson;
  }

  console.log(incrementeAgePerson(persona,1));
  
  return (

    <View style={styles.container}>
    
      <Text
      //importar estilos
      style={styles.text}
      >Hola Mundo desde react native</Text>
      <Button
        onPress={ () =>{
          incrementeAgePerson(persona);
          console.log("Ejecutando la funcion de persona ");
          console.log({persona});
          
        }}
        title="Presioname"
        color="#841584"
        
      />
      
        
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Press Here</Text>
      </TouchableOpacity>
    

      
      <Text>{persona.name}</Text>
      <Text>{persona.lastNmae}</Text>
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
//h+oja de estilos de javascript
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A59F99',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize: 24,
      color: "#FF8000"
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
  });

  export default App;