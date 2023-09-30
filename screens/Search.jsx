import React  from 'react'
import { StyleSheet,Text,TouchableOpacity,TextInput,View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from"./search.style";
import {Feather,Ionicons} from '@expo/vector-icons';
import {COLORS,SIZES} from "../constants/index";

const Search=() =>{
 
    return (
      <SafeAreaView>
       <View style={styles.searchContainer}>
      <TouchableOpacity>
       <Feather name="search" size={24} style={styles.searchIcon}/>
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
      <TextInput
      style={styles.searchInput}
      value=""
      onPressIn={()=>{}}
      placeholder="what are you looking for"
      />
      </View>
      <View>
      <TouchableOpacity style={styles.searchBtn}>
      <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite}/>
      </TouchableOpacity>
     </View> 
     </View>
      </SafeAreaView>
    )
}

export default Search
