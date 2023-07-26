import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import categories from '../Data/categories.json'
import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <Counter/>
      <FlatList
          data = {categories}
          keyExtractor={category => category}
          renderItem={({item}) => <CategoryItem item={item} navigation={navigation}/>}
          showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: colors.primary, 
        alignItems: 'center',
    }
})