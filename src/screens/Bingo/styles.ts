import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 30,
        backgroundColor: '#34aeef',
        display: 'flex',
        alignItems: 'center',
    },
    input:{
        marginLeft: 15,
        width: 100,
        height: 60,
        borderRadius: 5,
        backgroundColor: '#fff',
        fontSize: 15,
        textAlign: 'center'
    },
    text1:{
        marginTop: 30,
        marginLeft: 15,
        marginBottom: 10,
        color: '#fff',
        fontSize: 20
    },
    text2:{
        color: '#fff',
        fontSize: 20
    },
    button:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23ee54',
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 15,
        width: 100,
        height: 50
    },
    infoArea:{
        display: 'flex',
        marginTop: 40
    },
    infoText:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginRight: 10
    },
    label:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 0
    },
    areaText:{
        display: 'flex',
        flexDirection: 'row'
    }
})