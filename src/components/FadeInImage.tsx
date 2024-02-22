import React from "react";
import {useState } from "react";
import {ActivityIndicator, Animated, ImageErrorEventData, ImageStyle, NativeSyntheticEvent, StyleProp, View } from "react-native"
import { useAnimation } from "../hooks/useAnimation";

interface Props{
    uri:string;
    //trbajamos con todoas las propeidad de estilos de imagen 
    style?:StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri,style}:Props)=>{
    
    console.log({uri});
    const [isLoading,  setIsLoading] = useState(true);
    const {opacity,fadeIn} = useAnimation();

    const finishLoading = () =>{
        setIsLoading(false);
        fadeIn();
    }
    
    //parar al moemento de no haber inernet 
    //no renderizar al momento que no tenemos internet
    //contemplamos el error
    const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) =>{
        console.warn({err});
        setIsLoading(false);
    };

    return (
        <View
            style={{
                justifyContent:"center", 
                alignItems:"center",
                ...style as any,
            }}
                
        >
            {
                isLoading 
                && <ActivityIndicator
                    style={{position:"absolute"}}
                    color="grey"
                    size={30}
                /> 
            }
            <Animated.Image 
            source={{uri}} 
            onError={onError} 
            onLoad={finishLoading} 
            style={{...style as any, 
            opacity
            }}/>
        </View>
    );

        

    
}
