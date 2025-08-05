import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {Props} from './types'


const ProfileScreen = ({ navigation }: Props) => {
     return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Favorites')}>
        <Text style={{ fontSize:16, fontWeight: '600' }}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={{ fontSize:16, fontWeight: '600' }}>Settings</Text>
      </TouchableOpacity>


    </View>
  );
};

export default ProfileScreen;

