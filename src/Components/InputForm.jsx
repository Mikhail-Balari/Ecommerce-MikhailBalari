import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Global/Colors';

const InputForm = ({
    label, 
    onChange, 
    error = "",
    isSecure = false
}) => {
    const [input, setInput] = useState("");
    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style ={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
        {
            error ? 
            <Text style = {styles.error}>
                {error}
            </Text>
            : null
        }
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30,
    },
    subtitle: {
        width: '90%',
        fontSize: 16,
        fontFamily: 'Roboto',
        color: colors.secondary,
    },
    error: {
        fontSize: 16,
        color: colors.warning,
        fontFamily: 'Roboto',
        fontStyle: 'italic',
    },
    input: {
        width: '90%',
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: colors.primary,
        padding: 2,
        fontFamily: 'Roboto',
        fontSize: 14,
        color: 'white'
    }
})