import { useEffect, useState } from "react"
import { pokemonAPI } from "../api/pokemonAPI"
import { PokemonFull } from "../interfaces/Pokemon.interface"

export const usePokemon = (id: string)=>{
    
    const [isLoading,setIsLoading] = useState(true)
    const [pokemon,setPokemon] =useState<PokemonFull>({}as PokemonFull); 

    const loadPokemon = async() =>{
        const response = await pokemonAPI.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
        setIsLoading(false);
    }

    useEffect(()=>{
        loadPokemon();
    },[]);

    return{

    }

    
}