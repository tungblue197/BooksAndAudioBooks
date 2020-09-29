import React from "react";
import { View , Text , StyleSheet} from "react-native";
import Header from './components/Header/Header';


const App = () : JSX.Element => {
    return(
        <View>
            <Header title="Component header"/>
            <Text style={styles.title}>Hello world container</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    title: {
        color:'red'
    }
});
export default App;

