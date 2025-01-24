import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { counters } from '@/store/counters.store';
import CounterItem from './CounterItem';

const CounterList = () => {
    return (
        <FlatList
            data={counters}
            keyExtractor={(counter) => counter.id}
            renderItem={({ item }) => <CounterItem counter={item} />}
        />
    );
};

export default CounterList;
