import FAB from '@/components/FAB';
import React, { ReactNode, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

import CounterCard from '../components/CounterCard';

const MultiCounterApp = () => {
    const [counters, setCounters] = useState<number[]>([]);
    const [counterId, setCounterId] = useState(1);
    const addNewCounter = () => {
        setCounters([...counters, counterId]);
        setCounterId((prevId) => prevId + 1);
    };
    return (
        <View style={styles.container}>
             <ScrollView contentContainerStyle={{ padding: 16 }} className='bg-gray-200'>
            <View className='flex-row flex-wrap justify-start gap-2'>
                <CounterCard title='Calentamiento' onClose={() => console.log('close')} />
                <CounterCard title='Tronco Superior' onClose={() => console.log('close')} />
                <CounterCard title='Tronco Inferior' onClose={() => console.log('close')} />
                <CounterCard title='Ejercicio actual' onClose={() => console.log('close')} />
            </View>
        </ScrollView>
            {/* <FAB title='+1' position='right' onPress={addNewCounter} /> */}
        </View>
    );
};

export default MultiCounterApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
