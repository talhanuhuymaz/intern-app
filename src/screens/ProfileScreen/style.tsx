import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: { 
        flex:1, 
        alignItems:'flex-start',
        padding:20
    },
    button: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        alignItems: 'flex-start',
        margin:5,
    }
});

export default styles;