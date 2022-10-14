import {Button, StyleSheet, Switch, Text, View} from 'react-native'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import {useContext, useState} from 'react'

import {EventRegister} from 'react-native-event-listeners'
import {ThemeContext} from '../config'

const HomeScreen = ({navigation}) => {
  const [mode, setMode] = useState(false)
  const theme = useContext(ThemeContext)

  const toggleMode = () => setMode(mode => !mode)

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.text, {color: theme.color}]}>HomeScreen</Text>
      <Switch
        value={mode}
        onChange={() => {
          toggleMode()
          EventRegister.emit('ChangeTheme', mode)
        }}
      />
      <View style={styles.button}>
        <Button
          title="View Profile"
          onPress={() => navigation.navigate('ProfileScreen')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
  },
  button: {
    paddingTop: 20,
  },
})

export default HomeScreen
