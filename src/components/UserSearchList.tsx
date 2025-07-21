import React from 'react';
import { FlatList } from 'react-native';
import useUserSearchStore from '../store/userSearchStore';
import UserCardItem from './UserCardItem';


function UserSearchList() {
  const searchResult = useUserSearchStore((state) => state.searchResult);

    
  if (searchResult.length === 0) return null;
  
  return (
    <FlatList
      data={searchResult}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserCardItem user={item}/>}
    />
  );
};

export default UserSearchList;


