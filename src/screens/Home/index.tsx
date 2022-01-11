import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { Cartela } from '../../types/Cartela';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Home = () => {

  const navigation = useNavigation();

  const [cartelas, setCartelas] = useState<Cartela[]>([
    {ativa: false, codigo: 'A-1', totalChamadas: 0, 
     numeros: [1,4,10,11,20,21,37,38,49,50,69,70,80,81,82]},
    {ativa: false, codigo: 'A-2', totalChamadas: 0, 
     numeros: [2,9,18,19,23,24,36,40,51,52,60,68,71,72,83]},
    {ativa: false, codigo: 'A-3', totalChamadas: 0, 
     numeros: [8,12,22,35,39,41,42,53,54,67,73,74,79,84,86]},
    {ativa: false, codigo: 'A-4', totalChamadas: 0,
     numeros: [3,13,14,25,26,30,31,43,55,57,61,65,75,76,85]},
    {ativa: false, codigo: 'A-5', totalChamadas: 0,
     numeros: [5,15,27,32,44,45,56,62,64,66,77,78,87,88,89]},
    {ativa: false, codigo: 'A-6', totalChamadas: 0,
     numeros: [6,7,16,17,28,29,33,34,46,47,48,58,59,63,90]},
    {ativa: false, codigo: 'B-1', totalChamadas: 0,
     numeros: [4,7,11,20,25,30,31,41,47,54,57,66,70,80,81]},
    {ativa: false, codigo: 'B-2', totalChamadas: 0,
     numeros: [1,13,14,21,29,33,42,46,53,56,60,61,67,76,86]},
    {ativa: false, codigo: 'B-3', totalChamadas: 0,
     numeros: [2,15,26,32,34,48,52,59,68,71,72,74,82,87,88]},
    {ativa: false, codigo: 'B-4', totalChamadas: 0,
     numeros: [3,10,16,27,28,35,40,45,58,62,69,75,78,83,84]},
    {ativa: false, codigo: 'B-5', totalChamadas: 0,
     numeros: [8,9,17,18,22,23,36,38,44,49,51,63,77,89,90]},
    {ativa: false, codigo: 'B-6', totalChamadas: 0,
     numeros: [5,6,12,19,24,37,39,43,50,55,64,65,73,79,85]},
    {ativa: false, codigo: 'C-1', totalChamadas: 0,
     numeros: [4,10,11,20,24,30,37,40,45,51,52,57,70,72,81]},
    {ativa: false, codigo: 'C-2', totalChamadas: 0,
     numeros: [5,16,25,31,35,44,46,56,61,62,69,73,74,80,88]},
    {ativa: false, codigo: 'C-3', totalChamadas: 0,
     numeros: [6,7,12,15,18,26,32,41,49,53,65,68,76,78,82]},
    {ativa: false, codigo: 'C-4', totalChamadas: 0,
     numeros: [8,13,27,29,33,36,43,47,50,54,64,75,83,84,87]},
    {ativa: false, codigo: 'C-5', totalChamadas: 0,
     numeros: [9,17,19,21,22,38,48,55,63,66,67,77,79,85,86]},
    {ativa: false, codigo: 'C-6', totalChamadas: 0,
     numeros: [1,2,3,14,23,28,34,39,42,58,59,60,71,89,90]},
    {ativa: false, codigo: 'D-1', totalChamadas: 0,
     numeros: [4,10,19,26,27,30,31,41,57,63,74,76,77,82,86]},
    {ativa: false, codigo: 'D-2', totalChamadas: 0,
     numeros: [5,11,12,20,25,36,44,45,53,58,61,62,68,75,81]},
    {ativa: false, codigo: 'D-3', totalChamadas: 0,
     numeros: [6,9,14,15,24,28,38,39,50,59,65,78,79,87,88]},
    {ativa: false, codigo: 'D-4', totalChamadas: 0,
     numeros: [7,16,21,32,42,47,48,54,66,69,70,73,83,85,89]},
    {ativa: false, codigo: 'D-5', totalChamadas: 0,
     numeros: [1,8,13,29,33,34,43,46,52,55,60,64,71,84,90]},
    {ativa: false, codigo: 'D-6', totalChamadas: 0,
     numeros: [2,3,17,18,22,23,35,37,40,49,51,56,67,72,80]},
    {ativa: false, codigo: 'E-1', totalChamadas: 0,
     numeros: [3,10,11,19,23,27,30,36,47,58,60,68,73,82,90]},
    {ativa: false, codigo: 'E-2', totalChamadas: 0,
     numeros: [8,15,20,24,32,33,43,48,57,62,67,70,74,80,84]},
    {ativa: false, codigo: 'E-3', totalChamadas: 0,
     numeros: [5,13,16,22,37,40,41,46,51,55,56,61,64,72,83]},
    {ativa: false, codigo: 'E-4', totalChamadas: 0,
     numeros: [4,7,17,25,28,34,38,49,53,54,69,71,77,85,86]},
    {ativa: false, codigo: 'E-5', totalChamadas: 0,
     numeros: [6,12,21,26,31,39,42,50,65,66,76,78,79,81,88]},
    {ativa: false, codigo: 'E-6', totalChamadas: 0,
     numeros: [1,2,9,14,18,29,35,44,45,52,59,63,75,87,89]},
    {ativa: false, codigo: 'F-1', totalChamadas: 0,
     numeros: [3,10,11,15,23,26,35,38,43,55,59,60,66,73,81]},
    {ativa: false, codigo: 'F-2', totalChamadas: 0,
     numeros: [5,6,16,29,32,39,48,50,56,61,62,72,76,86,88]},
    {ativa: false, codigo: 'F-3', totalChamadas: 0,
     numeros: [9,12,20,25,36,41,42,51,52,67,70,77,83,87,89]},
    {ativa: false, codigo: 'F-4', totalChamadas: 0,
     numeros: [7,17,18,21,31,33,40,54,57,63,75,78,80,84,90]},
    {ativa: false, codigo: 'F-5', totalChamadas: 0,
     numeros: [1,2,13,22,27,34,44,46,47,58,68,69,71,74,82]},
    {ativa: false, codigo: 'F-6', totalChamadas: 0,
     numeros: [4,8,14,19,24,28,30,37,45,49,53,64,65,79,85]},
  ]);
  const [cartelasJogo, setCartelasJogo] = useState<Cartela[]>([]);
  //const [codigoAtual, setCodigoAtual] = useState<string>('');

  function procuraCartela(codigo: String): Cartela{
    let c: Cartela = {ativa: false,codigo: 'erro', totalChamadas: -1, numeros: []};
    let carts = [...cartelas];
    carts.forEach(cart => {
      
      if(cart.codigo === codigo){
        //console.log(cart);
        c = cart;
      }
    });
    return c;
  }

  function ativarCartela(codigo: String){
    let newList = [...cartelasJogo];

    let cart = procuraCartela(codigo);
    //console.log(cart);
    if(cart.ativa){
      let index = newList.indexOf(cart);
      cart.ativa = false;
      newList.splice(index, 1);
    }else{
      cart.ativa = true;
    }

    if(cart.codigo !== "erro" && cart.ativa){
      newList.push(cart);
    }
    console.log(newList);
    setCartelasJogo(newList);
    
  }

  function IniciarBingo(){
    let newList = [...cartelasJogo];
    newList.forEach(c =>{
      c.totalChamadas = 0;
    })
    setCartelasJogo(newList);
    if(cartelasJogo.length > 1){
      //console.log(cartelasJogo);
      navigation.navigate('Bingo', cartelasJogo);
    }
  }

  function isChecked(codigo: String): boolean{
    let cart = procuraCartela(codigo);
    return cart.ativa;
  }

  function renderCartelas(){

      return(
          <>
          <View>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('A-1')}>
              <CheckBox style={styles.box} checked={isChecked('A-1')}/>
              <Text style={styles.textC}>A-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('A-2')}>
              <CheckBox style={styles.box} checked={isChecked('A-2')}/>
              <Text style={styles.textC}>A-2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('A-3')} >
              <CheckBox style={styles.box} checked={isChecked('A-3')} />
              <Text style={styles.textC}>A-3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('A-4')}>
              <CheckBox style={styles.box} checked={isChecked('A-4')} />
              <Text style={styles.textC}>A-4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('A-5')}>
              <CheckBox style={styles.box} checked={isChecked('A-5')} />
              <Text style={styles.textC}>A-5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('A-6')}>
              <CheckBox style={styles.box} checked={isChecked('A-6')} />
              <Text style={styles.textC}>A-6</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('B-1')}>
              <CheckBox style={styles.box} checked={isChecked('B-1')} />
              <Text style={styles.textC}>B-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('B-2')}>
              <CheckBox style={styles.box} checked={isChecked('B-2')} />
              <Text style={styles.textC}>B-2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('B-3')}>
              <CheckBox style={styles.box} checked={isChecked('B-3')} />
              <Text style={styles.textC}>B-3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('B-4')}>
              <CheckBox style={styles.box} checked={isChecked('B-4')} />
              <Text style={styles.textC}>B-4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('B-5')}>
              <CheckBox style={styles.box} checked={isChecked('B-5')} />
              <Text style={styles.textC}>B-5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('B-6')}>
              <CheckBox style={styles.box} checked={isChecked('B-6')} />
              <Text style={styles.textC}>B-6</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('C-1')}>
              <CheckBox style={styles.box} checked={isChecked('C-1')} />
              <Text style={styles.textC}>C-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('C-2')}>
              <CheckBox style={styles.box} checked={isChecked('C-2')} />
              <Text style={styles.textC}>C-2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('C-3')}>
              <CheckBox style={styles.box} checked={isChecked('C-3')}/>
              <Text style={styles.textC}>C-3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('C-4')}>
              <CheckBox style={styles.box} checked={isChecked('C-4')} />
              <Text style={styles.textC}>C-4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('C-5')}>
              <CheckBox style={styles.box} checked={isChecked('C-5')} />
              <Text style={styles.textC}>C-5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('C-6')}>
              <CheckBox style={styles.box} checked={isChecked('C-6')} />
              <Text style={styles.textC}>C-6</Text>
            </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('D-1')}>
              <CheckBox style={styles.box} checked={isChecked('D-1')} />
              <Text style={styles.textC}>D-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('D-2')}>
              <CheckBox style={styles.box} checked={isChecked('D-2')} />
              <Text style={styles.textC}>D-2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('D-3')}>
              <CheckBox style={styles.box} checked={isChecked('D-3')} />
              <Text style={styles.textC}>D-3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('D-4')}>
              <CheckBox style={styles.box} checked={isChecked('D-4')} />
              <Text style={styles.textC}>D-4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('D-5')}>
              <CheckBox style={styles.box} checked={isChecked('D-5')} />
              <Text style={styles.textC}>D-5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('D-6')}>
              <CheckBox style={styles.box} checked={isChecked('D-6')} />
              <Text style={styles.textC}>D-6</Text>
            </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('E-1')}>
              <CheckBox style={styles.box} checked={isChecked('E-1')} />
              <Text style={styles.textC}>E-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('E-2')}>
              <CheckBox style={styles.box} checked={isChecked('E-2')} />
              <Text style={styles.textC}>E-2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('E-3')}>
              <CheckBox style={styles.box} checked={isChecked('E-3')} />
              <Text style={styles.textC}>E-3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('E-4')}>
              <CheckBox style={styles.box} checked={isChecked('E-4')} />
              <Text style={styles.textC}>E-4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('E-5')}>
              <CheckBox style={styles.box} checked={isChecked('E-5')}/>
              <Text style={styles.textC}>E-5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('E-6')}>
              <CheckBox style={styles.box} checked={isChecked('E-6')} />
              <Text style={styles.textC}>E-6</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('F-1')}>
              <CheckBox style={styles.box} checked={isChecked('F-1')} />
              <Text style={styles.textC}>F-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('F-2')}>
              <CheckBox style={styles.box} checked={isChecked('F-2')} />
              <Text style={styles.textC}>F-2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('F-3')}>
              <CheckBox style={styles.box} checked={isChecked('F-3')} />
              <Text style={styles.textC}>F-3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('F-4')}>
              <CheckBox style={styles.box} checked={isChecked('F-4')}/>
              <Text style={styles.textC}>F-4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('F-5')}>
              <CheckBox style={styles.box} checked={isChecked('F-5')} />
              <Text style={styles.textC}>F-5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.check} onPress={() => ativarCartela('F-6')}>
              <CheckBox style={styles.box} checked={isChecked('F-6')} />
              <Text style={styles.textC}>F-6</Text>
            </TouchableOpacity>
          </View>

          </>
      );

  }

  return(
    <View style={styles.container}>
      <Text style={styles.textTitle}>Selecionar cartelas</Text>

      <View style={styles.checkArea}>
        {renderCartelas()}
      </View>

      <View style={styles.textNumCartelas}>
        <Text style={styles.textNum}>
        Número de cartelas: {cartelasJogo.length}
        </Text>
      </View>

      <Pressable style={styles.buttonIni} onPress={IniciarBingo}>
        <Text style={styles.text}>
          Iniciar Bingo
        </Text>
      </Pressable>

    </View>
  );
}