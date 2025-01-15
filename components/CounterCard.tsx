import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
interface Props {
    title: string;
    onClose: () => void;
}
export default function CounterCard({title, onClose}: Props) {
  const [counter, setCounter] = useState(0);

  return (
      <View className='bg-gray-100 rounded-lg border border-gray-400 p-2 w-80'>
          {/* Header */}
          <View className='flex-row justify-between items-center mb-4'>
              <Text className='text-lg font-bold'>{title}</Text>
              <Pressable onPress={onClose} className='px-2 py-1'>
                  <Text className='text-gray-600 text-lg'>X</Text>
              </Pressable>
          </View>

          {/* Counter Display */}
          <View className='items-center mb-4'>
              <Text className='text-4xl font-bold'>{counter}</Text>
          </View>

          {/* Buttons */}
          <View className='flex-row justify-between'>
              <Pressable
                  onPress={() => setCounter((prev) => prev - 1)}
                  className='bg-blue-500 px-4 py-2 rounded-lg'
              >
                  <Text className='text-white font-medium'>-1</Text>
              </Pressable>
              <Pressable
                  onPress={() => setCounter((prev) => prev + 1)}
                  className='bg-green-500 px-4 py-2 rounded-lg'
              >
                  <Text className='text-white font-medium'>+1</Text>
              </Pressable>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        margin: 10,
        padding: 5,
        borderRadius: 10,
        // alignItems: 'center',

    },
});
