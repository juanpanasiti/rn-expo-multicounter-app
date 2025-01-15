import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    onLongPress?: () => void;
    position?: 'left' | 'right';
}

const FAB: React.FC<Props> = ({ title, onPress, onLongPress, position = 'right' }) => {
    return (
        <View
            style={[
                styles.fabContainer,
                position === 'left' ? styles.left : styles.right,
            ]}
        >
            <TouchableOpacity
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.fab}
            >
                <Text style={styles.fabText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    fabContainer: {
        position: 'absolute',
        bottom: 20,
        zIndex: 10,
    },
    left: {
        left: 20,
    },
    right: {
        right: 20,
    },
    fab: {
        backgroundColor: '#6200ee',
        borderRadius: 28,
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    fabText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default FAB;
