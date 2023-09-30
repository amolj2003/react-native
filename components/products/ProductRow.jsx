import {FlatList,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SIZES} from '../../constants';
import ProductCardView from './ProductCardView';
import styles from './productRow.style'

const ProductRow = () => {
   const products =[1,2,3,4]
    return (
    <View styles={styles.container}>
      <FlatList
      data={products}
      renderItem={({items}) => <ProductCardView/>}
      horizontal
      contentContainerStyle={{coloumnGap:SIZES.medium}}/>
    </View>
  )
}

export default ProductRow

