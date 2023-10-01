import {FlatList,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SIZES} from '../../constants';
import ProductCardView from './ProductCardView';
import styles from './productRow.style';
import useFetch from "../../hook/useFetch";


const ProductRow = () => {
  const {data,isLoading,error} = useFetch()

   const products =[1,2,3,4]
    return (
    <View styles={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxlarge} color={COLORS.primary}/>
      ):error?(
        <Text> Something went wrong </Text>
      ):(
        <FlatList
      data={products}
      renderItem={({items}) => <ProductCardView/>}
      horizontal
      contentContainerStyle={{coloumnGap:SIZES.medium}}/>
      )}
    </View>
  )
}

export default ProductRow

