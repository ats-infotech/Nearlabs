/**
 * @format
 * @flow
 */
import React, { useState, useEffect, useContext } from 'react';
import { FlatList } from 'react-native';
const {
  CText,
  DynamicView,
  DynamicTouchView
} = require('../../styles');
import * as C from '../../constants/index';
import { Colors } from '../../constants/theme';
import { networkCall } from '../../utils/service'
import { SearchBar, Icon } from 'react-native-elements';
import { AppContext } from '../../provider'
import AppImages from '../../../assets/images/appImages'
import { ButtonWithImage } from "../../constants/button";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function UserSelection(props) {
  //NOTE: DEFINE VARIABLE 🍎🍎🍎🍎🍎🍎 
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([])
  const [valueChange, setValueChange] = useState(false)
  const user = useContext < any > (AppContext);

  //NOTE: LIFE CYCLE METHOD 🍎🍎🍎🍎🍎
  useEffect(() => {
    getUsers()
  }, [])

  //NOTE: HELPER METHOD 🍎🍎🍎🍎🍎
  const getUsers = async () => {
    const response = await networkCall(C.USERS_API, 'GET', FormData, {});
    console.log('abcd---', response)
    setUsers(response.data)
  }
  const updateSearch = (search) => {
    setSearch(search);
    let filterData = users.filter(item => item.name.includes(search))
    setSearchData(filterData)
  };
  const getCharactesFromName = (name) => {
    const myArray = name.split(" ");
    return myArray[0].charAt(0) + myArray[1].charAt(0)
  }
  const handleUserSelection = (user) => {
    debugger;
    if (selectedUsers.length > 0) {
      let filterUser = selectedUsers.filter(item => item.id == user.id)
      if (filterUser.length == 0) {
        selectedUsers.push(user)
        setSelectedUsers(selectedUsers)
      } else {
        let filterUsers = selectedUsers.filter(item => item.id != user.id)
        setSelectedUsers(filterUsers)
      }
    } else {
      selectedUsers.push(user)
      setSelectedUsers(selectedUsers)
    }
    setValueChange(!valueChange)
  }

  const renderItem = ({ item }) => {
    let filterUser = selectedUsers.filter(itemA => itemA.id == item.id)
    return (
      <DynamicTouchView dynamic dynamicWidth width={100} pH={5} pV={5} aLIT={'flex-start'} jC='flex-start' onPress={() => {
        debugger;
        handleUserSelection(item)
      }}>
        <DynamicView dynamic dynamicWidth width={100} fD={'row'} aLIT={'center'} jC={'flex-start'}>
          <DynamicView dynamic dynamicWidthFix dynamicHeightFix height={45} width={45} mH={15} bR={22} bGC={'#EBEDF0'} aLIT={'center'} jC={'center'}>
            <CText dynamic tA={"center"} fS={12} color={Colors.secondaryTextColor}>
              {getCharactesFromName(item.name)}
            </CText>
          </DynamicView>
          <DynamicView dynamic fD={'column'} aLIT={'flex-start'} jC={'center'}>
            <CText dynamic tA={'left'} fS={16} mL={0} color={Colors.secondaryTextColor} >{item.name}</CText>
            <CText dynamic tA={'left'} fS={16} mL={0} color={Colors.secondaryTextColor} >@{item.username}</CText>
          </DynamicView>

          <Icon
            name={filterUser.length > 0 ? 'checkmark-circle' : 'ellipse'}
            type='ionicon'
            color={filterUser.length > 0 ? Colors.blue : Colors.sepratorColor}
            size={25}
            containerStyle={{ position: 'absolute', right: 10 }}
          />
        </DynamicView>
      </DynamicTouchView>
    )
  }

  //NOTE: LIFE CYCLE METHOD 🍎🍎🍎🍎
  return (
    <DynamicView dynamic dynamicWidth dynamicHeight height={98} width={100} jC='flex-start' bGC="white">
      <SearchBar
        placeholder="Search People"
        containerStyle={{ width: '90%', backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0, marginVertical: 20 }}
        inputContainerStyle={{ backgroundColor: '#EBEDF0', height: 36, borderRadius: 10 }}
        onChangeText={updateSearch}
        value={search}
      />
      <FlatList
        data={search.length > 0 ? searchData : users}
        renderItem={renderItem}
        style={{ width: '100%' }}
        keyExtractor={item => item.id}
      />
      <ButtonWithImage mT={10} bG={Colors.blue} vC={Colors.appColor}
        text={'Send Gift'} imageName={AppImages.RIGHT_ARROW} isBorder={true} onPress={() => {
          user.dispatch({ type: C.actionTitle.SELECTED_USERS, value: { 'users': selectedUsers }
         });
         props.navigation.navigate(C.screenTitle.NFT)
        }} />
    </DynamicView>
  );
}
