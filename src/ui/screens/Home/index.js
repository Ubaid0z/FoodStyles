import React, {useState,useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Input, Button, ListRow, Header} from '../../elements';
import {LogoIcon} from '../../../constants/ImageConstants';
import {darkOrange, lightOrange, lightWhite} from '../../theme/colors';
import {screenWidth} from '../../theme/helpers';
import {useDispatch, useSelector} from "react-redux";
import {hideLoading, showLoading} from "../../../store/slices/LoadingSlice";
import {cardDataGet, loginAPi} from "../../../services/services";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Home = () => {
  const [listData, setListData] = useState([
  ]);
    const dispatch = useDispatch()
  const getCardData = () =>{
      dispatch(showLoading())
      cardDataGet().then(data=>{
        console.log("Card",data.data.cards)
          setListData(data.data.cards)
          dispatch(hideLoading())
      }).catch(e =>{
          console.log("Cate")
      })
  }
    const loading = useSelector(state => state.LoadingSlice.loading);
  useEffect(()=>{
    getCardData ()
  },[])

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[lightOrange, darkOrange, lightWhite]}
        style={{height: screenWidth / 2}}>
        <Header icon={LogoIcon} />
      </LinearGradient>
      <View style={{justifyContent: 'center', alignItems: 'center', top: -90}}>
        <FlatList
          data={listData}
          extraData={listData}
          renderItem={({item}) => (
            <ListRow title={item.name} onPress={() => {}} />
          )}
          keyExtractor={(value, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').height / 8,
  },
  socialLoginButton: {
    backgroundColor: '#fff',
  },
  socialTextStyle: {
    color: '#000',
  },
  bodyCard: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsAndPolicy: {
    height: 70,
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  textColor: {
    color: '#fff',
  },
  borderBottomColor: {
    borderBottomColor: '#fff',
  },
});
