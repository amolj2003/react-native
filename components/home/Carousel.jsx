import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box';
import {COLORS} from '../../constants';



const Carousel = () => {
  const slides = [
    "https://wallup.net/wp-content/uploads/2019/10/641656-beach-sunrise-beauty-design-happy-house-living-room-luxury-relax-sofa-style-villa-windows-interior.jpg",
    "https://www.diningandlivingroom.com/wp-content/uploads/2017/03/10-Mid-Century-Modern-Living-Rooms-that-you-will-Love3.jpg",
    "https://bowa.com/wp-content/uploads/2015/07/MAY-Potomac-MD-Whole-House-Renovation-Sitting-Room.jpg"

  ]
  
    return (
    <View style={styles.CarouselContainer}>
      <SliderBox images={slides}
      dotcolor = {COLORS.primary}
      inactiveDotColor={COLORS.secondary}
      ImageComponentStyle ={{borderRadius: 15 ,width :'92%', marginTop :15}}
      autoplay
      circleLoop
      />
      </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    CarouselContainer:{
        flex:1,
        alignItems:'center'
    }
})