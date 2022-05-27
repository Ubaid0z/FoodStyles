import React, {useState} from 'react';
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

export const Home = () => {
  const [listData, setListData] = useState([
    {id: '1', title: 'First Food Style'},
    {id: '2', title: 'Vegan for me'},
  ]);

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
            <ListRow title={item.title} onPress={() => {}} />
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
