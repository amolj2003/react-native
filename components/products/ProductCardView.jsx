import { TouchableOpacity,StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import styles from './productCardView.style'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from "../../constants";
import {useNavigation} from "@react-navigation/native";

const ProductCardView = () => {
  const navigation =useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
         <Image
         source={{uri:"https://wallup.net/wp-content/uploads/2019/10/641656-beach-sunrise-beauty-design-happy-house-living-room-luxury-relax-sofa-style-villa-windows-interior.jpg"}}
         style={styles.image} />
        </View>
        <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>
          PRODUCT
        </Text>
        <Text style={styles.supplier} numberOfLines={1}>
          PRODUCT
        </Text>
        <Text style={styles.price} numberOfLines={1}>
         $2353
        </Text>
        </View>
        <TouchableOpacity style={styles.addbtn}>
          <Ionicons name='add-circle' size={35} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

