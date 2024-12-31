import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '@/hooks/Color';
import { useNavigation } from '@react-navigation/native';
import Start from '@/components/Start';

export default function Home({}) {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='light' />
        <View style={styles.MainContent}>
            <View>
                <Text style={{textAlign:'center',fontSize:32,color:'white',fontWeight:'600',marginTop:40,}}>Number Puzzle</Text>
            </View>
            <View style={{justifyContent:'center',flex:1,}}>
                <TouchableOpacity style={styles.BTN} onPress={()=> navigation.navigate('Start')}>
                    <Text style={styles.BTNText}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BTN} onPress={()=>{navigation.navigate('Level')}}>
                    <Text style={styles.BTNText}>Level</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bg,
        padding:20,
    },
    MainContent:{
        flex:1,
        // justifyContent:'',
    },
    BTN:{
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:Colors.Btn,
        borderRadius:10,
        marginVertical:25,
    },
    BTNText:{
        color:Colors.Text,
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
    }
})