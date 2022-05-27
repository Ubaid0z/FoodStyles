import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {useSelector} from 'react-redux';

const LoadingView = () => {
  const {loading} = useSelector(state => state.LoadingSlice);

  return (
    <Modal
      style={{felx: 1, width: '100%'}}
      visible={loading}
      transparent={true}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      presentationStyle={'overFullScreen'}
      backdropOpacity={0.1}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}>
        <ActivityIndicator size={'large'} />
      </View>
    </Modal>
  );
};
export default LoadingView;
