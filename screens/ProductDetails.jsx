import { StyleSheet, Text,TouchableOpacity, View,Image } from 'react-native'
import React,{useState} from 'react'
import styles from './productDetails.style'
import {COLORS,SIZES} from '../constants'
import {Ionicons,Fontisto,SimpleLineIcons,MaterialCommunityIcons} from "@expo/vector-icons"

const ProductDetails = ({navigation}) => {
  const [count,setCount] =useState(1)
  
   const increament=()=>{
    setCount(count+1)
   }

   const decrement=()=>{
    if(count>1){
    setCount(count-1)
    }
   }

  return (
    <View style={styles.container}>
      <View style={styles.uperRow}>
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
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>$660.88 </Text>
        </View>
        </View>

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
           <TouchableOpacity onPress={()=>{increament()}}>
            <SimpleLineIcons
             name='plus' size={20}/>
           </TouchableOpacity>

           <Text style={styles.ratingText} > {count} </Text>
          
           <TouchableOpacity onPress={()=>{decrement()}}>
            <SimpleLineIcons
             name='minus' size={20}/>
           </TouchableOpacity>
          
          </View> 
         
          
        </View> 
        </View> 
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description </Text>
          <Text style={styles.descText}>
          A hotel room is a private space within a hotel establishment where guests can stay during their travels. These rooms are designed to provide comfort, convenience, and a temporary sense of home. Here's a description of a typical hotel room:
          A hotel room is a private space within a hotel establishment where guests can stay during their travels. These rooms are designed to provide comfort, convenience, and a temporary sense of home. Here's a description of a typical hotel room:
          Size and Layout: Hotel rooms come in various sizes and layouts, catering to different needs and budgets. They can range from standard single rooms with a single bed to luxurious suites with separate living and sleeping areas.
          </Text>
          </View>

          <View style={{marginBottom:SIZES.small}}>
            <View style={styles.location}>
              <View style={{flexDirection :"row"}}>
                <Ionicons name="location-outline" size={20}/> 
              </View>   
              <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="truck-delivery-outline" size={20}/>
                <Text> Dallas </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
                <Text> Free Delivery </Text>
                </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() =>{}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW </Text>
           </TouchableOpacity> 
           
           <TouchableOpacity onPress={() =>{}} style={styles.addCart}>
           <Fontisto name='shopping-bag' size={22} style={styles.addCarts} color={COLORS.lightWhite} />
           </TouchableOpacity> 
        </View> 
      </View>
    
  )
}

export default ProductDetails

