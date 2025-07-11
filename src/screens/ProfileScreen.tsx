import React from 'react';
import { View, StyleSheet, TouchableOpacity ,Text} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../navigation/StackNavigatorSettings';

type Props = NativeStackScreenProps<ProfileStackParamList, 'ProfilePage'>;

const ProfileScreen = ({ navigation }: Props) => {
     return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={{ fontSize:16, fontWeight: '600' }}>Settings</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ProfileScreen;

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