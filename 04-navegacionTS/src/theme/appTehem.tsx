import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    globalmargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },

    botonGrandeText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
        /* alignItems: 'center', */

    },
    menuTexto: {
        fontSize: 20,


    },
    menuBottom: {
        marginVertical: 10,
    }
});