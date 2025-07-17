import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { GitHubUser } from '../store/types/GitUserType'; 


type Props = {
    user: GitHubUser;
}

function UserCardItem({ user }: Props) {
    return (
         <View style={styles.card}>
        
                  <View style={styles.userInfoRow}>
                    <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
                    <Text style={styles.name}>{user.login}</Text>
                  </View>
        
                  <TouchableOpacity
                    style={styles.repoButton}
                    onPress={() => {console.log(`${user.login}'s repositories clicked`);}}>
                    <Text style={styles.repoButtonText}>Repositories</Text>
                  </TouchableOpacity>
                  
                </View>
    )
}

export default UserCardItem;

const styles = StyleSheet.create({
  card: {
    minWidth:400,
    width: "100%",
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
   userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  repoButton: {
    marginTop: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'black',
    borderRadius: 6,
    alignSelf: 'flex-end',
  },
  repoButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});