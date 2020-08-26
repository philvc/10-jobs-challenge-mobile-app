import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        boxSizing: 'border-box',
        padding: 35,
        flex: 1
    },
    pageContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    },
    title: {
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
        flexWrap: 'wrap',
        paddingHorizontal: 15,
        lineHeight: 23,
    }
})

export default styles;