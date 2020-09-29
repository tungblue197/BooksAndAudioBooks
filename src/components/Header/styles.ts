import { StyleSheet } from 'react-native';
import { HEADER } from '../../constants/stylesValiable';
export default StyleSheet.create({
    headerContainer: {
        marginTop:20,
        flex:1,
        height: HEADER.HEIGHT,
        justifyContent:"center",
        backgroundColor: '#333',
        color: HEADER.COLOR,
        alignItems:'center'
    }
});