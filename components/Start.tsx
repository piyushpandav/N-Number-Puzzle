import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/hooks/Color'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function Start() {

    const navigation = useNavigation();

    const array = [1, 2, 3, 4, 5, 6, 7, 8 ];
    const [final, setFinal] = useState(Array(9).fill(""))
    const [emptys, setEmpty] = useState(0);
    const [subname, setSubname] = useState('Start');
    function starting() {
        let copy = Array(9).fill('');
        let rand = () => Math.floor(Math.random() * 9);
        let i = 0;


        while (i < array.length) {
            let index = rand();
            if (copy[index] === '') {
                copy[index] = array[i++];
            }
        }
        setSubname('Reset')
        setEmpty(copy.indexOf(''));
        setFinal(copy);
    }


    function control(index: number) {
        if (subname === 'Start') {
            alert("Click The Start Button!!");
            return
        }
        let checkPos = [emptys - 1, emptys + 1, emptys + 3, emptys - 3];
        if (checkPos.includes(index)) {
            let dub = [...final]
            dub[emptys] = dub[index]
            dub[index] = "";
            setFinal(dub);
            setEmpty(index);
        }

    }
    let data = final.toString()
    let win = '1,2,3,4,5,6,7,8';

    if (data.includes(win)) {
        alert("Winners!!");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View><Ionicons name="arrow-back" size={24} color="white" onPress={()=>{router.back()}}/></View>
            <Text style={{ marginVertical: 50, color: '#ffd000', fontSize: 26, textAlign: 'center', fontWeight: '600', }}>Target Pattern</Text>
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                    <View style={styles.Table}>
                        {
                            final.map((el, index) => {
                                return <Text style={styles.BTNTE} onPress={() => control(index)}>{el}</Text>
                            })
                        }
                    </View>
                </View>
                <View style={{ marginTop: 100, }}>
                    <TouchableOpacity style={styles.Reset} onPress={() => { starting() }} >
                        <Text style={styles.Text}>{subname}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
        padding: 15,
    },
    Table: {
        width: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 10,
        backgroundColor: '#e08a8a5c',
        textAlign: 'center',
        justifyContent: 'center',
        gap: 2,
    },
    BTNTE: {
        width: '30%',
        height: 80,
        backgroundColor: '#80805f',
        textAlign: 'center',
        lineHeight: 80,
        fontSize: 20,
        color: Colors.Text,
        borderRadius: 7,
    },
    Reset: {
        backgroundColor: Colors.Btn,
        paddingHorizontal: 12,
        paddingVertical: 18,
        borderRadius: 10,
    },
    Text: {
        color: Colors.Text,
        fontSize: 20,
        textAlign: 'center',
    }
})