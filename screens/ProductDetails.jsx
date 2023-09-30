import { StyleSheet, Text,TouchableOpacity, View,Image } from 'react-native'
import React,{useState} from 'react'
import styles from './ProductDetails.style'
import {Ionicons,SimpleLineIcons} from "@expo/vector-icons"

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.uuperRow}>
        <TouchableOpacity onPress={() =>navigation.goBack()}>
         <Ionicons name='chevron-back-circle' size={30}/>
        </TouchableOpacity>
      </View>
      <Image 
       source ={{uri :"https://wallup.net/wp-content/uploads/2019/10/641656-beach-sunrise-beauty-design-happy-house-living-room-luxury-relax-sofa-style-villa-windows-interior.jpg"}}
       style={styles.image}
       />
      
      <View style={styles.details}>
        <View style ={styles.titleRow}>
         <Text style={styles.title}>
         Product
        </Text>
        <Text style={styles.priceWrapper}>
         $660.88
        </Text>

        <View style={styles.ratingRow}>
           <View style={styles.rating}>
            {[1,2,3,4,5].map((index)=>
            <Ionicons
            key={index}
            name='star'
            size={24}
            color="gold"/>
            )}
            <Text style={styles.ratingText}> (4.9) </Text> 
           </View> 
         
          <View style={styles.rating}>
           <TouchableOpacity onPress={()=>{}}>
            <SimpleLineIcons
             name='plus' size={20}/>
           </TouchableOpacity>

           <Text style={styles.ratingText} > (4.9) </Text>
          
           <TouchableOpacity onPress={()=>{}}>
            <SimpleLineIcons
             name='minus' size={20}/>
           </TouchableOpacity>
          </View>
        </View> 
        </View> 
      </View>
    </View>
  )
}

export default ProductDetails

