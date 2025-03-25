import React from 'react';
import {StyleSheet,View} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import Divider from '../../components/Divider';

const AllGeneres = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderComponent text="All Generes" isBack={true} navigation={navigation}/>
      <Divider/>
    </View>
  );
};
export default AllGeneres;

const styles = StyleSheet.create({
container:{flex: 1,backgroundColor:'#FFFFFF'}
})