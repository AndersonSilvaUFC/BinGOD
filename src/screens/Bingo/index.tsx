import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View , Text, TextInput, Pressable, BackHandler, Alert } from 'react-native';
import { Cartela } from '../../types/Cartela';
import { styles } from './styles';
import { Audio } from 'expo-av';
import { Jogo } from '../../types/Jogo';
import api  from '../../services/api';

export const Bingo = (props:any)=> {
    const [cartelasJogo, setCartelasJogo] = useState<Cartela[]>(props.route.params);
    const [numerosSorteados, setNumerosSorteados] = useState<number[]>([]);
    const [numeroAtual, setNumeroAtual] = useState<string>('');
    const [ultimaBola, setUltimaBola] = useState<number>(0);
    const [armadas, setArmadas] = useState<Cartela[]>([]);
    const [batidas, setBatidas] = useState<Cartela[]>([]);

    const [jogo, setJogo] = useState<Jogo>({id: 0,dataJogo:new Date(), cartelas: [], bolasChamadas:[],
      numeroBolasChamadas: 0,  primeiraBolaChamada: 0, ultimaBolaChamada: 0, numeroBolasChamadasAoArmar: 0,
      quantidadeImpares: 0, quantidadePares: 0, cartelasArmadas: [], cartelasBatidas: []});

    let lista:String[] = [];
    cartelasJogo.forEach(c => {
      lista.push(c.codigo);
    })

    useEffect(()=>{
      setJogo({...jogo, cartelas: lista});
    },[]);
    

    
    let navigation = useNavigation();

    const [sound, setSound] = React.useState();

    async function playSound() {
      //console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
         require('../../sounds/win.wav')
      );
      setSound(sound);
  
      //console.log('Playing Sound');
      await sound.playAsync(); }
  
    React.useEffect(() => {
      return sound
        ? () => {
            //console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);
    function contain(c: Cartela, n: number): boolean{
        let contem: boolean = false; 
        let list = c.numeros;
        list.forEach(l => {
            if(l === n)
                contem = true;
        });
        return contem;
    }

    function naoSaiu(n: number): boolean{
        let aux = true;
        let list = [...numerosSorteados];
        list.forEach(e => {
            if(e === n)
               aux = false;
        });
        return aux;
    }

    function adicionaNumero(){
        
        if(numeroAtual !== ''){
            let jogo_aux = jogo;
            let n: number = +numeroAtual;
            if(n >= 1 && n <= 90 && naoSaiu(n)){
                if(numerosSorteados.length === 0){
                  let primeira = n;
                  let jogo_aux = jogo;
                  jogo_aux.primeiraBolaChamada = n;
                  setJogo(jogo_aux);
                }
                if(n%2 === 0){
                  let pares = jogo.quantidadePares + 1;
                  let jogo_aux = jogo;
                  jogo_aux.quantidadePares = pares;
                  setJogo(jogo_aux);
                }else{
                  let impares = jogo.quantidadeImpares + 1;
                  let jogo_aux = jogo;
                  jogo_aux.quantidadeImpares = impares;
                  setJogo(jogo_aux);
                }

                setUltimaBola(n);
                let newList = [...numerosSorteados];
               
                //console.log(n);
                newList.push(n);

                jogo_aux.bolasChamadas = newList;
                jogo_aux.numeroBolasChamadas = newList.length;
                jogo_aux.ultimaBolaChamada = n;

                setNumerosSorteados(newList);

                console.log(numerosSorteados)

                //console.log(cartelasJogo);
                let newCartelas = [...cartelasJogo];
                
                newCartelas.forEach(c => {
                    //.log(c);
                    if(contain(c,n)){
                        c.totalChamadas += 1;
                        //console.log(c);
                    }
                });
                
                setCartelasJogo(newCartelas);
                
                atualizaArmadas();
                bateu();
                setNumeroAtual('');
                
                setJogo(jogo_aux);
            }
        }
    }

    function atualizaArmadas(){
        let newList = [...armadas];
        let carts = [...cartelasJogo];
        carts.forEach(c => {
            if(c.totalChamadas == 14){
              if(armadas.length == 0){
                let nAoArmar = numerosSorteados.length;
                let jogo_aux = jogo;
                jogo_aux.numeroBolasChamadasAoArmar = nAoArmar;
                setJogo(jogo_aux);
              }
              if(!newList.includes(c)){
                newList.push(c);
              }
            }
        });
        setArmadas(newList);
        let newArmadas:String[] = [];
        armadas.forEach(c => {
          newArmadas.push(c.codigo);
        });
        let jogo_aux = jogo;
        jogo_aux.cartelasArmadas = newArmadas;
        setJogo(jogo_aux);
    }

    function bateu(){
        let newList = [...batidas];
        let lisArmadas = [...armadas];
        let carts = [...cartelasJogo];
        carts.forEach(c => {
            if(c.totalChamadas === 15){
              if(!newList.includes(c)){
                newList.push(c);
                let index = lisArmadas.indexOf(c);
                lisArmadas.splice(index,1);
                setArmadas(lisArmadas);
                let jogo_aux = jogo;
                let lista:String[] = [];
                lisArmadas.forEach(c => {
                  lista.push(c.codigo);
                });
                jogo_aux.cartelasArmadas = lista;

                setJogo(jogo_aux);
              }
            }
        });

        setBatidas(newList);

        if(newList.length > 0){
          playSound();

          let newBatidas:String[] = [];
          newList.forEach(c => {
            newBatidas.push(c.codigo);
          });     
          let jogo_aux = jogo;
          jogo_aux.cartelasBatidas = newBatidas;
            
          setJogo(jogo_aux);
          console.log(jogo);
                             
          api.post("jogo", jogo).then(response => this.setState({ articleId: response.data.id }))
          .catch(error => {
              this.setState({ errorMessage: error.message });
              console.error('There was an error!', error);
          });
        }

    }


    const backAction = () => {
        Alert.alert("ATENÇÃO!", "Deseja realmente voltar?", [
          {
            text: "Cancelar",
            onPress: () => null,
            style: "cancel"
          },
          { text: "Sim", onPress: () => navigation.goBack() }
        ]);
        return true;
      };

      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }, []);

    function renderInfos(){
        return(
            <View style = {styles.infoArea}>
                <Text style={styles.label}>Cartelas Armadas:</Text>
                  <View style={styles.areaText}>
                      {
                        armadas.map((item,index) => {
                          return(
                            <Text style={styles.infoText}>{item.codigo}</Text>
                          );
                        })
                      }
                    
                  </View>
                <Text style={styles.label}>Cartelas Batidas:</Text>
                  <View style={styles.areaText}>
                    {batidas.map((item,index) => {
                      return(
                        <Text style={styles.infoText}>{item.codigo}</Text>
                      );
                    })}
                  </View>
            </View>
        )
    }

    return(
        
        <View style={styles.container}>
            <Text style={styles.text1}>Adicionar bola</Text>
            <TextInput editable={batidas.length < 1} style={styles.input} keyboardType='numeric' value={numeroAtual} onChangeText={(text) => setNumeroAtual(text)}/>
            <Pressable style={styles.button} onPress={adicionaNumero}>
                <Text style={styles.text2}>
                    Adicionar
                </Text>
            </Pressable>
            <Text style={styles.label}>Bolas chamadas: {numerosSorteados.length}</Text>
            <Text style={styles.label}>Última bola chamada: {ultimaBola}</Text>
            {renderInfos()}
            

        </View>
        
    );
}