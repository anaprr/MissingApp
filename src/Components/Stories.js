import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Stories({pessoas}) {

  return (
    <FlatList
      data={pessoas}
      renderItem={ ({item}) => 
        <View style={css.story}>
          <Image source={{ uri: item.image}} style={css.image}/>
        </View>
      }
      keyExtractor={ (item) => item.id }
   
      horizontal={true}
    />
  )
}
const css = StyleSheet.create({
   
})