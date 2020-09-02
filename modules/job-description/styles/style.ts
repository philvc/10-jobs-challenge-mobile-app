import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        boxSizing: 'border-box',
        padding: 35,
        flex: 1
    },
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 'fit-content',
        width: 'fit-content'
    },
    title: {
        marginBottom: 20,
        marginTop: 20,
        flexWrap: 'wrap',
        paddingHorizontal: 15,
    },
    titleText: {
        lineHeight: 23,
        textAlign: 'center',

    }
})

export default styles;