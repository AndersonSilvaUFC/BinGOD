import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            backgroundColor: '#34aeef',
        },
        text:{
            color: '#fff',
            fontSize: 20,
            textAlign: 'center',
        },
        textTitle:{
            color: '#fff',
            fontSize: 20,
            marginTop: 30,
            marginBottom: 15
        },
        input:{
            marginTop: 20,
            width: 100,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 7,
            textAlign: 'center'
        },
        check:{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 0,
            marginTop: -10,
            marginLeft: -8
        },
        checkArea:{
            overflow: 'scroll',
            marginLeft: -20,
            marginRight:10,
            flex: 1,
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'row',
            padding: 0
        },
        textNumCartelas:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20
        },
        textNum:{
            marginTop: 0,
            fontSize: 28,
            color: '#fff'
        },
        box:{
            margin: 0
        },
        textC:{
            fontWeight: 'bold',
            color: '#fff',
            marginLeft: -20
,           marginRight: 0
        },
        buttonAdd:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#23ee54',
            width: 150,
            height: 45,
            marginTop: 30,
            borderRadius: 10
        },
        buttonIni:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#23ee54',
            width: 350,
            height: 70,
            marginTop: 40,
            borderRadius: 10
        }
    }
)