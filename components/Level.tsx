import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/hooks/Color'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function Level() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="arrow-back" size={24} color="white" onPress={() => { router.back() }} />
            </TouchableOpacity>
            <View>
                <Text style={{ color: Colors.Text, fontSize: 42, textAlign: 'center', fontWeight: '600', letterSpacing: 1.5, }}>Level</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', }}>
                <TouchableOpacity style={styles.BTN} onPress={() => { navigation.navigate('Start') }}>
                    <Text style={styles.Text}>Easy</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.BTN} onPress={() => { navigation.navigate('Hard') }}>
                    <Text style={styles.Text}>Hard</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
        padding: 20,
    },
    BTN: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 10,
        backgroundColor: Colors.Btn,
        marginVertical: 20,
    },
    Text: {
        color: Colors.Text,
        fontSize: 24,
        textAlign: 'center',
    }
})