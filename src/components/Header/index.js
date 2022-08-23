import React from 'react'
import{
    View,
    StyleSheet,
    Text,
    StatusBar, 
    TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {MotiText,MotiView} from 'moti'
import { timing } from 'react-native-reanimated';


 const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22:64;



export default function Header({name}){
    return(
        
    <View style={styles.container}>
    <MotiView style={styles.content}
    from={{
translateY: -150,
opacity:0,
    }}
    animate={{
translateY:0,
opacity:1,

    }}

    transition={{
        type:"spring",
        duration:500,
        delay:100,
    }}
    >
    <MotiText style={styles.username}
    from={{
        translateX: - 300
    }}
    animate={{
        translateX:0
    }}
    transition={{
        type:"timing",
        duration:500,
        delay:100,
    }}
    >{name}</MotiText>
    <TouchableOpacity 
    activeOpacity={0.9}
    style={styles.botao}
    
    >
     <Feather 
     name='user' size={27} color='#fff'
     />


    </TouchableOpacity>        
            
    </MotiView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1CA6F6',   
      paddingTop: statusBarHeight,
      flexDirection: 'row',
      paddingStart:16,
      paddingEnd:16,
      paddingBottom:60,
    },
    content: {
        flex:1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    username:{
        fontSize:18,
        color: '#fff',
        fontWeight:'bold',
    },
    botao:{
        width:44,
        height:44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:44/2,
    },

  });
  