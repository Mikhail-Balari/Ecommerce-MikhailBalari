import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Card = ({children}) => {
  return (
    <View style={styles.cardContainer}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        width: 250,
        shadowColor: colors.secondary,
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderWidth: 2,
        borderColor: colors.darkmatter,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary

    }
})