import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        height: '10%',
        backgroundColor: colors.darkmatter,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 25,
        color: colors.secondary,
    }
})