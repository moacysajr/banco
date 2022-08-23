import React, { useState } from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';

export default function Movements({data }) {
    const [showValue, setShowValue] =useState(false);
 return (
   <TouchableOpacity style={style.container}
   onPress={() => setShowValue(!showValue)}
   >
    <Text style={style.date} >{data.date}</Text>

    <View style={style.content}>
        <Text style={style.label}>{data.label}</Text>
        
        {showValue ? (
            <Text style={data.type === 1 ? style.valor : style.espenses 
            }>
          {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}` }</Text>
        ) : (
            <View style={style.esqueleto}>
            </View>
        )}
        
    </View>
   </TouchableOpacity>
  );
}
const style= StyleSheet.create({

container:{
    flex:1,
    marginBottom:24,
    borderBottomColor:'#DADADA',
    borderBottomWidth: 0.5,

},
content:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:2,
    marginBottom:8,

},
date:{
    color:'#DADADA',
    fontWeight:'bold',
},
label:{
    fontWeight:'bold',
    fontSize:17,
},
valor:{
    fontSize:17,
    color:'#2ecc71',
    fontWeight:'bold',
},
espenses:{
    fontSize:17,
    color:'#e74c3c',
    fontWeight:'bold',
},
esqueleto:{
    marginTop:6,
    width:80,
    height:10,
    backgroundColor:'#DADADA',
    borderRadius:8,    



}



})