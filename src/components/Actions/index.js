import { useState } from 'react';
import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView,Modal } from 'react-native';
import { Tes  } from '../Tes';

import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
 
 const [visibleModal, setVisibleModal] = useState(false);
    return (
   <ScrollView
   showsHorizontalScrollIndicator={false}
   horizontal={true} 
   style={styles.container}
   >
    <TouchableOpacity style={styles.botao1}
    onPress={()=>setVisibleModal(true)}>
        <View style={styles.area}>
            <AntDesign
            name="addfolder"
            size={26}
            color="#000"
            />
        </View>
        <Text style={styles.teste}>Entradas

        </Text>


    </TouchableOpacity>

    <Modal
    visible={visibleModal}
    transparent={true}
    onRequestClose={() => setVisibleModal(false)}>
        <Tes
        handleClose={() => setVisibleModal(false)}/>


    </Modal>
            
    <TouchableOpacity style={styles.botao1}>
        <View style={styles.area}>
            <AntDesign
            name="tagso"
            size={26}
            color="#000"
            />
        </View>
        <Text style={styles.teste}>Compras

        </Text>


    </TouchableOpacity>
    
    <TouchableOpacity style={styles.botao1}>
        <View style={styles.area}>
            <AntDesign
            name="creditcard"
            size={26}
            color="#000"
            />
        </View>
        <Text style={styles.teste}>Credito

        </Text>


    </TouchableOpacity>

    <TouchableOpacity style={styles.botao1}>
        <View style={styles.area}>
            <AntDesign
            name="barcode"
            size={26}
            color="#000"
            />
        </View>
        <Text style={styles.teste}>Boletos

        </Text>


    </TouchableOpacity>

    <TouchableOpacity style={styles.botao1}>
        <View style={styles.area}>
            <AntDesign
            name="setting"
            size={26}
            color="#000"
            />
        </View>
        <Text style={styles.teste}>Conta

        </Text>


    </TouchableOpacity>

    

   </ScrollView>
  );
}
const styles = StyleSheet.create({
    container:{
        marHeight:84,
        marginBottom:14,
        marginTop:14,
        paddingEnd:14,
        paddingStart:14,
        
    },
    botao1:{
        alignItems: 'center',
        marginRight: 32,
        
    },
    area:{
        backgroundColor:'#ecf0f1',
        height:60,
        width:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',

    },
    
    teste:{
        marginTop:4,
        textAlign:'center',
        fontWeight:'bold',


    }

})