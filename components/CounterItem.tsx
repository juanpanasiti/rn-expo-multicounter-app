import React, { useState } from 'react';

import { View, Text, Pressable } from 'react-native';

import { Counter } from '@/store/counters.store';

interface Props {
    counter: Counter;
}
const CounterItem = ({ counter }: Props) => {
    const [value, setValue] = useState(counter.initialValue);
    const color = counter.color || 'blue';
    const onPressAdd = () => {
        const newValue = counter.maxValue !== undefined ? Math.min(value + 1, counter.maxValue) : value + 1;
        setValue(newValue);
    };
    const onPressSubtract = () => {
        const newValue = counter.minValue !== undefined ? Math.max(value - 1, counter.minValue) : value - 1;
        setValue(newValue);
    };
    return (
        <View className='flex-col items-center p-2 m-2'>
            <Text className={`text-${color}-500 text-3xl mb-1 font-bold`}>{counter.title}</Text>

            <View className='flex-row w-full justify-between items-center'>
                {/* -1 Button */}
                <Pressable
                    onPress={onPressSubtract}
                    onLongPress={() => setValue((prev) => counter.initialValue)}
                    className={`bg-${color}-500 px-5 border-${color}-500 border-solid border-2 rounded-l-3xl h-20 justify-center`}
                >
                    <Text className='text-5xl text-white font-medium'>-1</Text>
                </Pressable>

                {/* Value */}
                <Text className={`text-5xl flex-1 border-${color}-500 border-solid border-2 text-center align-middle text-${color}-500 h-20`}>
                    {value}
                </Text>

                {/* +1 Button */}
                <Pressable
                    onPress={onPressAdd}
                    className={`bg-${color}-500 px-5 border-${color}-500 border-solid border-2 rounded-r-3xl h-20 justify-center`}
                >
                    <Text className='text-5xl text-white font-medium'>+1</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CounterItem;
