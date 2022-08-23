import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list =[
  {
    id: 1,
    label:'Equatorial',
    value: '3000,90',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label:'Moacy',
    value: '2.500,00',
    date: '18/09/2022',
    type: 1 // receita//entradas
  },
{
  id: 3,
  label:'Cadu',
  value: '1.547,90',
  date: '11/10/2022',
  type: 2 //receita //entradas 
}
]

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Header name="Agiota"/>

      <Balance saldo="4.567,00" gastos="-423,00" />
      <Actions/>
      
    
      <Text style={styles.titulo}>Gastos recentes </Text>
        
        <Text style={styles.marca}></Text>
        <FlatList
        style={styles.lista}
        data={list}
        keyExtractor={(item)=> String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=> <Movements data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  titulo:{
    fontWeight:'bold',
    fontSize:20,
    margin:14,
    marginTop:-30

  },
  lista:{
    marginStart:14,
    marginEnd:14,

  },
  marca:{


  }
});
