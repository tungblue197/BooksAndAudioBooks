import React from 'react';
import { View , Text} from 'react-native';
import styles from './styles';
export interface IHeaderProps{
    title: string;
}

const Header = ({ title } : IHeaderProps): JSX.Element => {
    return(
        <View style={styles.headerContainer}>
            <Text>{title}</Text>
        </View>
    )
}

export default Header;
