import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containe:{
        width: '100%',
        padding: 10,
    },
    button: {
        backgroundColor: 'yellow',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    }
});

export default styles;